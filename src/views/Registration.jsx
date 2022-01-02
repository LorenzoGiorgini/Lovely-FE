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
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Registration = () => {
  const gender = ["Man", "Woman"];

  const preferences = ["Man", "Woman", "Everyone"];

  const [googleAcc, setGoogleAcc] = useState(null);

  const schema = yup
    .object()
    .shape({
      firstName: yup.string().min(2).required(),
      lastName: yup.string().min(2).required(),
      email: googleAcc ? googleAcc.email : yup.string().email().required(),
      password: googleAcc ? null : yup.string().min(8).required(),
      dateOfBirth: yup.date().required(),
      gender: yup.string().required(),
      preferences: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data)
    /* if (data) {
      try {
        const response = await axiosConfig.post("/users/register", data);
      } catch (error) {
        console.log(error);
      }
    } */
  };

  useEffect(() => {
    if (cookie.get("acc")) {
      setGoogleAcc(JSON.parse(cookie.get("acc").substring(2)));
      /* googleId: JSON.parse(cookie.get("acc").substring(2)).id,
        email: JSON.parse(cookie.get("acc").substring(2)).email, */
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex mb-3">
              <Input
                id="text"
                name="firstName"
                placeholder="First Name"
                {...register("firstName")}
                errors={errors.firstName?.message}
              />
              <Input
                id="text"
                name="lastName"
                placeholder="Last Name"
                {...register("lastName")}
                errors={errors.lastName?.message}
              />
            </div>
            <div className="flex flex-col mb-3">
              <span className="text-pink-500 mb-2">Birthday</span>
              <Controller
                control={control}
                name="dateOfBirth"
                render={({ field }) => (
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      format="MM/dd/yyyy"
                      disableFuture={true}
                      {...field}
                    />
                  </MuiPickersUtilsProvider>
                )}
              />
              {errors.dateOfBirth?.message && errors.dateOfBirth.message}
            </div>
            <span className="text-pink-500">Gender</span>
           
            <ButtonGroup
              info={"gender"}
              options={gender}
              form={getValues("gender")}
              {...register("gender")}
            />

            <span className="text-pink-500">Preferences</span>

            <ButtonGroup
              info={"preferences"}
              options={preferences}
              form={getValues("preferences")}
              {...register("preferences")}
            />
            
            <div className="mb-3">
              {googleAcc ? (
                <Input
                  id="email"
                  name="email"
                  disabled={true}
                  value={googleAcc.email}
                  placeholder="Email"
                />
              ) : (
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                  errors={errors.email?.message}
                />
              )}
              {!googleAcc && (
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
                />
              )}
            </div>
            <div className="flex items-center justify-center">
              <LoginHeroBtn
                title={"Continue"}
                width={"w-3/6"}
                height={"h-9"}
                gradient={"bg-gradient-to-l from-orange-500 to-pink-500"}
                type={"submit"}
                callback={onSubmit}
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