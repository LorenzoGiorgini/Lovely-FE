import { useEffect, useState } from "react";
import cookie from "js-cookie";
import NavBarHome from "../components/NavBarHome/NavBarHome";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { TextField } from "@mui/material";
import Input from "../components/Input/Input";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import Title from "../components/Title/Title";

const Registration = () => {
  const gender = ["Man", "Woman"];

  const preferences = ["Man", "Woman", "Everyone"];

  const [googleAcc, setGoogleAcc] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: null,
    gender: "",
    preferences: "",
    googleId: null
  });

  const handleForm = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    if (cookie.get("acc")) {
      setGoogleAcc(JSON.parse(cookie.get("acc").substring(2)));
      setForm({
        ...form,
        googleId: JSON.parse(cookie.get("acc").substring(2)).id,
        email: JSON.parse(cookie.get("acc").substring(2)).email
      })
    } else {
      setGoogleAcc(null);
    }
  }, []);

  return (
    <div className="bg-neutral-900 h-full w-full">
      <NavBarHome />
      <Title placeholder="Create Account" />
      <div className="flex flex-col md:flex-row w-full h-screen justify-around p-12 md:p-32 ml-auto mr-auto">
        <div className="w-full md:w-3/6">
          <div className="flex mb-3">
            <Input
              id="text"
              name="firstName"
              value={form.firstName}
              placeholder="First Name"
              handleForm={handleForm}
            />
            <Input
              id="text"
              name="lastName"
              value={form.lastName}
              placeholder="Last Name"
              handleForm={handleForm}
            />
          </div>
          <div className="flex flex-col mb-3">
            <span className="text-pink-500 mb-2">Birthday</span>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker
                label="Birthday"
                inputFormat="MM/dd/yyyy"
                variant="standard"
                margin="normal"
                id="date-picker"
                value={form.dateOfBirth}
                onChange={(date) => setForm({ ...form, dateOfBirth: date })}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <span className="text-pink-500">Gender</span>
          <ButtonGroup
            options={gender}
            form={form}
            setForm={setForm}
            info={"gender"}
          />
          <span className="text-pink-500">Preferences</span>
          <ButtonGroup
            options={preferences}
            form={form}
            setForm={setForm}
            info={"preferences"}
          />
          <div className="mb-3">
            {googleAcc ? (
              <Input
                id="email"
                name="email"
                value={googleAcc.email}
                placeholder="Email"
                handleForm={handleForm}
              />
            ) : (
              <Input
                id="email"
                name="email"
                value={form.email}
                placeholder="Email"
                handleForm={handleForm}
              />
            )}
            {!googleAcc && (
              <Input
                id="password"
                name="password"
                value={form.password}
                placeholder="Password"
                handleForm={handleForm}
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-3/6 h-full">
          <h1 className="text-center">Profile Pic</h1>
        </div>
      </div>
    </div>
  );
};

export default Registration;
