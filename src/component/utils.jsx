import inFlag from "../assets/img/in-flag.png";
import usFlag from "../assets/img/us-flag.png";
import ukFlag from "../assets/img/uk-flag.png";
import ausFlag from "../assets/img/aus-flag.png";
import singFlag from "../assets/img/sing-flag.png";

const flags = [
  { code: "+91", img: inFlag },
  { code: "+1", img: usFlag },
  { code: "+44", img: ukFlag },
  { code: "+61", img: ausFlag },
  { code: "+65", img: singFlag },
];

export const phoneRules = {
  "+91": {
    length: 10,
    regex: /^[6-9]\d{9}$/,
    message: "Indian numbers must be 10 digits and start with 6, 7, 8, or 9.",
  },
  "+61": {
    length: 9,
    regex: /^4\d{8}$/,
    message: "Australian numbers must be 9 digits and start with 4.",
  },
  "+44": {
    length: 10,
    regex: /^7\d{9}$/,
    message: "UK numbers must be 10 digits and start with 7.",
  },
  "+1": {
    length: 10,
    regex: /^[2-9]\d{9}$/,
    message: "US numbers must be 10 digits and not start with 0 or 1.",
  },
  "+65": {
    length: 8,
    regex: /^[2-9]\d{7}$/,
    message: "Singapore numbers must be 8 digits and not start with 0 or 1.",
  },
};

export const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    minHeight: "36px",
    paddingLeft: "4px",
    cursor: "pointer",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
  }),
  indicatorsContainer: () => ({
    display: "none",
  }),
  singleValue: (base) => ({
    ...base,
    color: "gray",
  }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? "#f1f1f1" : "transparent",
    color: "gray",
    cursor: "pointer",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "white",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
  }),
};
export const flagOptions = flags.map((f) => ({
  value: f.code,
  label: (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <img src={f.img} alt="flag" style={{ width: 20, height: 15 }} />
      <span style={{ color: "black" }}>{f.code}</span>
    </div>
  ),
}));
