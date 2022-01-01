import { useEffect, useState } from "react";
import cookie from "js-cookie";
import axiosConfig from "../tools/axios-config";
import NavBarHome from "../components/NavBarHome/NavBarHome";
import Input from "../components/Input/Input";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import Title from "../components/Title/Title";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import LoginHeroBtn from "../components/LoginHeroBtn/LoginHeroBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Registration = () => {
  const gender = ["Man", "Woman"];

  const preferences = ["Man", "Woman", "Everyone"];

  const [googleAcc, setGoogleAcc] = useState(null);

  const [disabled, setDisabled] = useState(true);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: null,
    gender: "",
    preferences: "",
    googleId: "",
  });

  const schema = yup
    .object()
    .shape({
      firstName: yup.string().required(),
      age: yup.number().positive().integer().required(),
    })
    .required();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  const onDisabled = () => {
    if (googleAcc) {
      if (
        form.firstName === "" ||
        form.lastName === "" ||
        form.email === "" ||
        form.dateOfBirth === null ||
        form.gender === "" ||
        form.preferences === "" ||
        form.googleId === ""
      ) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    } else {
      if (
        form.firstName === "" ||
        form.lastName === "" ||
        form.email === "" ||
        form.dateOfBirth === null ||
        form.gender === "" ||
        form.preferences === "" ||
        form.password === ""
      ) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  };

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
        email: JSON.parse(cookie.get("acc").substring(2)).email,
      });
    } else {
      setGoogleAcc(null);
    }
  }, []);

  useEffect(() => {
    onDisabled();
  }, [form]);

  useEffect(() => {
    onDisabled();
  }, []);

  const newUser = async () => {
    try {
      const response = await axiosConfig.post("/users/register", form);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-neutral-900 h-full w-full">
      <NavBarHome />
      <Title placeholder="Create Account" />
      <div className="flex flex-col md:flex-row w-full h-screen justify-around p-12 md:p-32 ml-auto mr-auto">
        <div className="w-full md:w-3/6">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  format="MM/dd/yyyy"
                  disableFuture={true}
                  value={form.dateOfBirth}
                  onChange={(date) => setForm({ ...form, dateOfBirth: date })}
                />
              </MuiPickersUtilsProvider>
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
            <div className="flex items-center justify-center">
              <LoginHeroBtn
                title={"Continue"}
                width={"w-3/6"}
                height={"h-9"}
                gradient={"bg-gradient-to-l from-orange-500 to-pink-500"}
                disabled={disabled}
                callback={newUser}
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-3/6 h-full">
          <h1 className="text-center">Profile Pic</h1>
        </div>
      </div>
    </div>
  );
};

export default Registration;
