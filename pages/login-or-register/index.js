import { Form, Formik } from "formik";
import Head from "next/head";
import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { signUp, signIn } from "../../feature/action/user/userAction";
import { useButtonLoader, withoutAuth } from "../../hooks";


// validation
const signUpValidationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("Password required")
    .test(
      "regex",
      "Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
      (val) => {
        let regExp = new RegExp(
          "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$"
        );
        return regExp.test(val);
      }
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password Required"),
});

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("Password required")
    .test(
      "regex",
      "Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
      (val) => {
        let regExp = new RegExp(
          "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$"
        );
        return regExp.test(val);
      }
    ),
});

const Login = () => {
  // state
  const [state, setState] = useState({
    showPassword: false,
    confirmshowPassword: false,
    switchPage: false,
  });
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>
          Webure Technologies - {state.switchPage ? "Register" : "Login"}
        </title>
        <meta
          name="description"
          content="Full service agency for complete IT Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/*  form  */}
          <div className="md:w-2/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74] tracking-wide">
              {state.switchPage ? "Register" : "Login"}
            </h2>
            {!state.switchPage && (
              <p className="mt-4 text-[#002D74] text-md font-semibold">
                If you are already a member, easily log in
              </p>
            )}

            {/*  */}
            {state.switchPage ? (
              <RegisterSection {...{ state, setState, dispatch }} />
            ) : (
              <LoginSection {...{ state, setState, dispatch }} />
            )}

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Login with Google
            </button>

            {!state.switchPage && (
              <div className="mt-5 text-sm border-b border-[#002D74] py-4 text-[#002D74]">
                <a
                  href="#"
                  className="font-semibold hover:text-black hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            )}

            <div className="mt-3">
              <p className="text-[#002D74] font-semibold">
                {state.switchPage
                  ? `Already have an account?`
                  : "Don't have an account?"}
              </p>
            </div>

            <div
              className="mt-3 flex justify-between items-center text-[#002D74]"
              onClick={() =>
                setState({ ...state, switchPage: !state.switchPage })
              }
            >
              <button className="py-2 px-8 w-full bg-white text-lg border rounded-xl hover:scale-110 duration-300">
                {state.switchPage ? "Login" : "Register"}
              </button>
            </div>
          </div>

          {/* Image */}
          {/* <div className="hidden md:block w-1/2">
            <image className="rounded-2xl" src="/img/login.jpeg" alt="Webure Admin Login" />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Login;

export const getServerSideProps = withoutAuth(async (ctx) => {
  return {
    props: {},
  };
});

// Login
const LoginSection = ({ state, setState, dispatch }) => {
  // Button loading
  const [buttonLoader, setButtonLoader] = useButtonLoader(
    "Login",
    "Loading..."
  );
  // Router
  const router = useRouter();

  //
  const signInHandler = async (values, submitProps) => {
    setButtonLoader(true);
    // signIn action
    // console.log(values,"values")
    await dispatch(signIn({ ...values }));
    
    

    router.push("/admin/profile");

    setButtonLoader(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={signInHandler}
      validationSchema={signInValidationSchema}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col gap-4">
            <div>
              <input
                className="p-2 mt-8 rounded-lg border w-full"
                type="email"
                name="email"
                placeholder="Email"
                value={values.email?.toLocaleLowerCase()}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}> {errors.email} </div>
              ) : null}
            </div>
            <div className="relative">
              <div className="flex">
                <input
                  className="p-2 rounded-lg border w-full"
                  type={`${state.showPassword ? "text" : "password"}`}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  id="current-password"
                  autoComplete="off"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2`}
                  onClick={() =>
                    setState({ ...state, showPassword: !state.showPassword })
                  }
                >
                  {state.password ? (
                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  ) : (
                    <>
                      <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>
          {errors.password && touched.password ? (
            <span style={{ color: "red" }}> {errors.password} </span>
          ) : null}
          <div className="flex flex-col mt-[1rem]">
            <button
              type="submit"
              onClick={handleSubmit}
              ref={buttonLoader}
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

// Register
const RegisterSection = ({ state, setState, dispatch }) => {
  const signUpHandler = async (values, submitProps) => {
    const form = new FormData();
    form.append("email", values.email);
    form.append("password", values.password);
    form.append("name", values.name);

    // signup action
    await dispatch(signUp(form));
    // router.push("/login-or-register");
    submitProps.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={signUpHandler}
      validationSchema={signUpValidationSchema}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col gap-4">
            <div>
              <input
                className="p-2 mt-4 rounded-lg border w-full"
                type="email"
                name="email"
                placeholder="Email"
                value={values.email?.toLocaleLowerCase()}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}> {errors.email} </div>
              ) : null}
            </div>
            <div>
              <input
                className="p-2 rounded-lg border w-full"
                type="text"
                name="name"
                placeholder="Full Name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name ? (
                <div style={{ color: "red" }}> {errors.name} </div>
              ) : null}
            </div>
            <div className="relative">
              <div className="pass-div">
                <div className="flex">
                  <input
                    className="p-2 rounded-lg border w-full"
                    type={`${state.showPassword ? "text" : "password"}`}
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2`}
                    onClick={() =>
                      setState({ ...state, showPassword: !state.showPassword })
                    }
                  >
                    {state.showPassword ? (
                      <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    ) : (
                      <>
                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </>
                    )}
                  </svg>
                </div>
              </div>
              {errors.password && touched.password ? (
                <span style={{ color: "red", margin: 0 }}>
                  {errors.password}{" "}
                </span>
              ) : null}
            </div>
            <div className="relative">
              <div className="flex">
                <input
                  className="p-2 rounded-lg border w-full"
                  type={`${state.confirmshowPassword ? "text" : "password"}`}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2`}
                  onClick={() =>
                    setState({
                      ...state,
                      confirmshowPassword: !state.confirmshowPassword,
                    })
                  }
                >
                  {state.confirmshowPassword ? (
                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  ) : (
                    <>
                      <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>
          {errors.confirmPassword && touched.confirmPassword ? (
            <span style={{ color: "red" }}> {errors.confirmPassword} </span>
          ) : null}
          <div className="flex flex-col mt-[1rem]" onClick={handleSubmit}>
            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Register
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
