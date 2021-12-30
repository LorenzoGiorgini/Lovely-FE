import { useEffect, useState } from "react";
import cookie from "js-cookie";
import NavBarHome from "../components/NavBarHome/NavBarHome";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { TextField } from "@mui/material";
import Input from "../components/Input/Input";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";

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
  });
  

  
  useEffect(() => {
    if (cookie.get("acc")) {
      setGoogleAcc(JSON.parse(cookie.get("acc").substring(2)));
    } else {
      setGoogleAcc(null);
    }

    console.log(googleAcc);
  }, []);

  return googleAcc ? (
    <div className="bg-gray-500 h-full w-full">
      <NavBarHome />
      <h1 className="flex items-center justify-center">Create Account</h1>
      <div className="flex flex-col md:flex-row w-full h-full justify-around p-32">
        <div className="w-full md:w-3/6">
          <div className="flex">
            <Input id="text" placeholder="First Name" />
            <Input id="text" placeholder="Last Name" />
          </div>
          <div className="flex flex-col">
            <span className="text-pink-500">Birthday</span>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker
                label="Birthday"
                inputFormat="MM/dd/yyyy"
                variant="dialog"
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
          <Input id="email" placeholder="Email" />
        </div>
        <div className="w-full md:w-3/6 h-full">
          <h1>Profile Pic</h1>
        </div>
      </div>
    </div>
  ) : null;
};

export default Registration;
