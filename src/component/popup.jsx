import React, { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { toast } from "react-toastify";
import { phoneRules, customStyles, flagOptions } from "./utils";

import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

const Popup = ({ isOpen, onRequestClose }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact_number") {
      const numericValue = value.replace(/[^0-9]/g, "");
      const rule = phoneRules[selectedCountryCode];
      if (!rule || numericValue.length <= rule.length) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else if (name === "name") {
      const textOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData({ ...formData, [name]: textOnly });
    } else if (name === "email") {
      setFormData({ ...formData, [name]: value.toLowerCase() });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    const number = formData.contact_number.trim();
    const rule = phoneRules[selectedCountryCode];

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must only contain letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !(
        formData.email.endsWith("@gmail.com") ||
        formData.email.endsWith("@yahoo.com") ||
        formData.email.endsWith("@outlook.com") ||
        formData.email.endsWith("@icloud.com") ||
        formData.email.endsWith(".ac.in") ||
        formData.email.endsWith(".edu") ||
        formData.email.endsWith(".edu.in")
      )
    ) {
      newErrors.email =
        "Email must be from a valid domain (e.g., Gmail, Yahoo, .ac.in)";
    }

    if (!number) {
      newErrors.contact_number = "Phone Number is required.";
    } else if (rule && !rule.regex.test(number)) {
      newErrors.contact_number = rule.message;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "At least 5 characters needed";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      toast.success("Form submitted successfully!");
      console.log("Form Data:", {
        ...formData,
        fullPhone: selectedCountryCode + formData.contact_number,
      });
      setFormData({
        name: "",
        email: "",
        contact_number: "",
        message: "",
      });
      onRequestClose(); 
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Talk to Us"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="p-4 rounded-4 form-box text-white form-box-popup">
        <h1 className="mb-4 text-muted">Talk to Us</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control bg-white text-black border-white"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control bg-white text-black border-white"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          <div className="mb-3 position-relative">
            <div
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "80px",
                zIndex: 2,
              }}
            >
              <Select
                value={flagOptions.find(
                  (opt) => opt.value === selectedCountryCode
                )}
                onChange={(selected) =>
                  setSelectedCountryCode(selected.value)
                }
                options={flagOptions}
                styles={customStyles}
                isSearchable={false}
                menuPlacement="auto"
              />
            </div>

            <input
              type="tel"
              name="contact_number"
              placeholder="Phone Number"
              className="form-control bg-white text-black border-white"
              style={{ paddingLeft: "90px" }}
              value={formData.contact_number}
              onChange={handleChange}
            />
          </div>
          {errors.contact_number && (
            <small className="text-danger">{errors.contact_number}</small>
          )}

          <div className="mb-3">
            <textarea
              name="message"
              placeholder="How do we help you?"
              className="form-control bg-white text-black border-white"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <small className="text-danger">{errors.message}</small>
            )}
          </div>

          <button
            type="submit"
            className="submit-button btn-outline-light w-50"
          >
            Hit Me Now
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Popup;
