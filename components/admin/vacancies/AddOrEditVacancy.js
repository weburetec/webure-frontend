import { Form, Formik } from "formik";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../controls/input";
import TextEditor from "../../../controls/textEditor";
import {
  addVacancy,
  getVacancy,
  updateVacancy,
} from "../../../feature/action/vacancy/vacancyAction";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import {
  positions,
  skillSetOptions,
  technicalSkillOptions,
} from "../../career/dummy";
import { validationSchema } from "./validation";

const animatedComponents = makeAnimated();

const AddOrEditVacancy = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const { vacancy } = useSelector((s) => s.vacancyReducer);

  const formHandler = async (values) => {
    (await id)
      ? dispatch(
          updateVacancy({
            values,
            jobPosition: values.jobPosition.map((val) => val.value),
            technicalSkill: values.technicalSkill.map((val) => val.value),
            skillSet: values.skillSet.map((val) => val.value),
            id,
          })
        )
      : dispatch(
          addVacancy({
            ...values,
            jobPosition: values.jobPosition.map((val) => val.value),
            technicalSkill: values.technicalSkill.map((val) => val.value),
            skillSet: values.skillSet.map((val) => val.value),
          })
        );
    router.push("/admin/vacancy");
  };

  useEffect(() => {
    dispatch(getVacancy(id));
  }, [id]);

  return (
    <div className="p-2 rounded-md px-2 lg:px-5">
      <p className="text-lg font-semibold tracking-wider mb-[14px]">
        {id ? "Edit" : "Add"} Vacancy
      </p>
      <Formik
        initialValues={{
          jobTitle: id ? vacancy.jobTitle : "",
          experience: id ? vacancy.experience : "",
          openVacancy: id ? vacancy.openVacancy : "",
          deadline: id ? moment(vacancy.deadline).format("YYYY-MM-DD") : "",
          jobType: id ? vacancy.jobType : "",
          department: id ? vacancy.department : "",
          location: id ? vacancy.location : "",
          jobRequirement: id ? vacancy.jobRequirement : "",
          jobDescription: id ? vacancy.jobDescription : "",
          jobPosition: id
            ? vacancy.jobPosition?.map((el) => ({
                value: el,
                label: el,
              }))
            : [],
          skillSet: id
            ? vacancy.skillSet?.map((el) => ({
                value: el,
                label: el,
              }))
            : [],
          technicalSkill: id
            ? vacancy.technicalSkill?.map((el) => ({
                value: el,
                label: el,
              }))
            : [],
          isRemoteOnly: id ? vacancy.isRemoteOnly : false,
          jobHeightLight: id ? vacancy.jobHeightLight : "",
        }}
        onSubmit={formHandler}
        validationSchema={!id && validationSchema}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <Input
                name="jobTitle"
                label="Job Title"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.jobTitle}
              />
              <Input
                name="experience"
                label="Experience (1-2 Year)"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.experience}
              />
              <Input
                name="location"
                label="Location"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
              />
              <div>
                <CreatableSelect
                  options={positions}
                  isMulti
                  name="jobPosition"
                  placeholder="Choose/Create Job Position"
                  onChange={(val) => setFieldValue("jobPosition", val)}
                  value={values.jobPosition}
                  components={animatedComponents}
                />
                {errors.jobPosition && touched.jobPosition ? (
                  <div style={{ color: "red" }}> {errors.jobPosition} </div>
                ) : null}
              </div>
              <div>
                <CreatableSelect
                  options={skillSetOptions}
                  isMulti
                  name="skillSet"
                  placeholder="Choose/Create Skill Set"
                  onChange={(val) => setFieldValue("skillSet", val)}
                  value={values.skillSet}
                  components={animatedComponents}
                />
                {errors.skillSet && touched.skillSet ? (
                  <div style={{ color: "red" }}> {errors.skillSet} </div>
                ) : null}
              </div>
              <div>
                <CreatableSelect
                  options={technicalSkillOptions}
                  isMulti
                  name="technicalSkill"
                  placeholder="Choose/Create Technical Skill"
                  onChange={(val) => setFieldValue("technicalSkill", val)}
                  value={values.technicalSkill}
                  components={animatedComponents}
                />
                {errors.technicalSkill && touched.technicalSkill ? (
                  <div style={{ color: "red" }}> {errors.technicalSkill} </div>
                ) : null}
              </div>
              <Input
                name="openVacancy"
                label="Open Vacancy For (10 People)"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.openVacancy}
              />
              <Input
                name="deadline"
                label="Deadline"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.deadline}
              />
              <Input
                name="jobType"
                label="Job Type"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.jobType}
              />
              <Input
                name="department"
                label="Department"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.department}
              />

              <div className="flex items-center gap-3">
                <p className="font-semibold tracking-wider mb-1">Is Remote?</p>
                <input
                  type="radio"
                  name="isRemoteOnly"
                  onChange={() => setFieldValue("isRemoteOnly", true)}
                  checked={values.isRemoteOnly === true}
                  value={values.isRemoteOnly}
                  className="h-6 w-6"
                  onBlur={handleBlur}
                />
                <label htmlFor="Yes" className="font-semibold tracking-wider">
                  Yes
                </label>
                <input
                  type="radio"
                  name="isRemoteOnly"
                  onChange={() => setFieldValue("isRemoteOnly", false)}
                  checked={values.isRemoteOnly === false}
                  value={values.isRemoteOnly}
                  className="h-6 w-6"
                  onBlur={handleBlur}
                />
                <label htmlFor="No" className="font-semibold tracking-wider">
                  No
                </label>
              </div>
            </div>
            {/*  */}

            {errors.jobHeightLight && touched.jobHeightLight ? (
              <p style={{ color: "red" }}>{errors.jobHeightLight}</p>
            ) : null}

            <TextEditor
              onChange={(val) => setFieldValue("jobHeightLight", val)}
              value={values.jobHeightLight}
              placeholder="Enter Job Height Light"
              toolbarId="jobHeightLight"
              className="mt-4 md:mt-2"
            />
            <br />
            <div className="mb-28 md:mb-12" />

            {/*  */}
            {errors.jobRequirement && touched.jobRequirement ? (
              <p style={{ color: "red" }}>{errors.jobRequirement}</p>
            ) : null}
            <TextEditor
              onChange={(val) => setFieldValue("jobRequirement", val)}
              value={values.jobRequirement}
              placeholder="Enter Job Requirement"
              toolbarId="jobRequirement"
            />
            <br />
            <div className="mb-28 md:mb-12" />
            <TextEditor
              onChange={(val) => setFieldValue("jobDescription", val)}
              value={values.jobDescription}
              placeholder="Enter Job Description (Optional)"
              toolbarId="jobDescription"
            />
            <div className="mb-32 md:mb-10" />
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
            >
              {id ? "Update" : "Add"} Vacancy
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddOrEditVacancy;
