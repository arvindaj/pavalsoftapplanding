import React, { useState } from "react";
import Select from "react-select";
import "../css/ThreeSectionLayout.css";
import { FaArrowRightLong } from "react-icons/fa6";
 
const Talktous = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  selectedCountryCode,
  setSelectedCountryCode,
  flagOptions,
  customStyles,
  centerImage,
}) => {
  const [showForm, setShowForm] = useState(false);
 
  return (
    <section className={`three-wrapper ${showForm ? "form-visible" : ""}`}>
      <div className={`slim-left ${showForm ? "slide-out" : ""}`}>
        <div className="main-para">
          <p>
            PavalSoft is a leading Mobile app development service provider in
            USA and India who have delivered 500+ apps for various Industries.
            Be it a native mobile app for Android or iOS or cross-platform apps
            using Flutter and React Native, we have done it all. From MVP to
            custom application development, we offer end-to-end mobile app
            development services catering to your varying needs.
          </p>
          <button className="main-explore-btn">Explore Now</button>
        </div>
      </div>
 
      <div className={`slim-image ${showForm ? "shift-left" : ""}`}>
        <h1
          className={`center-heading ${showForm ? "center-heading-true" : ""}`}
        >
          Paval Soft <br />
          App Revolution
        </h1>
        <img src={centerImage} alt="Mobile App" />
        {!showForm && (
          <button className="talk-btn" onClick={() => setShowForm(true)}>
            Talk to Us <FaArrowRightLong className="ms-2" />
          </button>
        )}
      </div>
 
      <div className={`slim-form ${showForm ? "slide-in" : ""}`}>
        <div
          className={`close-x ${showForm ? "visible" : "hidden"}`}
          onClick={() => setShowForm(false)}
        >
          Close it <FaArrowRightLong className="ms-2" />
        </div>
 
        <h2 className="form-title">Talk to Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
 
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
 
          <div className="phone-field">
            <Select
              value={flagOptions.find(
                (opt) => opt.value === selectedCountryCode
              )}
              onChange={(selected) => setSelectedCountryCode(selected.value)}
              options={flagOptions}
              styles={customStyles}
              isSearchable={false}
              className="flag-select"
            />
            <input
              type="tel"
              name="contact_number"
              placeholder="Phone Number"
              className="form-control phone-input"
              value={formData.contact_number}
              onChange={handleChange}
            />
          </div>
          {errors.contact_number && (
            <small className="text-danger">{errors.contact_number}</small>
          )}
 
          <textarea
            name="message"
            placeholder="How do we help you?"
            rows="3"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <small className="text-danger">{errors.message}</small>
          )}
 
          <button type="submit" className="submit-button">
            Hit Me Now
          </button>
        </form>
      </div>
    </section>
  );
};
 
export default Talktous;