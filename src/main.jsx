import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import User from "./User.jsx";

const user = {
  name: "Hadia",
  surname: "Shahjahan",
  age: 23,
  dob: "2006-02-10",
  country: "Pakistan",
  city: "Sialkot",
  profession: "Student",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <User info={user} />
  </StrictMode>,
);
