import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../controls/input";
import { getUser, updateUser } from "../../../feature/action/user/userAction";
import File from "../../../controls/file";
import { CustomSelect } from "../../../components/career/careerPage";

// Role
const options = [
  {
    value: "ROLE_USER",
    label: "User",
  },
  {
    value: "ROLE_ADMIN",
    label: "Admin",
  },
];

const Profile = ({ user }) => {
  const [picture, setPicture] = useState(null);

  const dispatch = useDispatch();

  const { singleUser, loader } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUser(user._id));
  }, []);

  const formHandler = async (values) => {
    const formData = new FormData();

    formData.append("email", values.email);
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("role", values.role);
    formData.append("_id", user._id);

    if (values.avatar) {
      formData.append("avatar", values.avatar);
    }

    await dispatch(updateUser({ formData, userId: user._id }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-2 lg:p-4 rounded-md">
          {/* Profile Form */}
          <Formik
            initialValues={{
              email: singleUser.email,
              name: singleUser.name,
              phone: singleUser.phone,
              avatar: null,
              role: singleUser.role,
            }}
            onSubmit={formHandler}
            enableReinitialize
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
              <Form onSubmit={handleSubmit}>
                <Input
                  name="email"
                  label="Email address"
                  type="email"
                  value={values.email}
                  disabled
                />

                <div className="grid md:grid-cols-2 md:gap-6">
                  <Input
                    name="name"
                    label="Full name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />

                  <Input
                    name="phone"
                    label="Phone number (123-456-7890)"
                    type="text"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-col gap-3 mb-4">
                  <CustomSelect
                    noDefault
                    options={options}
                    onChange={(opt) => setFieldValue("role", opt.value)}
                    id="postType"
                    defaultValue={
                      values.role === "ROLE_USER" ? options[0] : options[1]
                    }
                  />

                  <File
                    onChange={(e) => {
                      setFieldValue("avatar", e.target.files[0]);
                      setPicture(URL.createObjectURL(e.target.files[0]));
                    }}
                    name="avatar"
                    src={`${
                      picture ??
                      `${axios.defaults.baseURL}/user/${singleUser.avatar}`
                    }`}
                    imageStyle="h-64 object-fill"
                  />
                </div>

                {/* <div className="grid md:grid-cols-2 md:gap-6">
                   <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_company"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company (Ex. Google)
                    </label>
                  </div> 
                </div> */}
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update Profile
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="">
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum vel
          debitis accusamus, pariatur deleniti quisquam ducimus eligendi tempore
          assumenda inventore facere voluptatum voluptatibus, sint veritatis
          sapiente ipsam hic odio magni. */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
