import * as Yup from "yup";

// validation schema
export const validationSchema = Yup.object().shape({
  jobTitle: Yup.string().required("Job Title is required*"),
  experience: Yup.string().required("Experience is required*"),
  openVacancy: Yup.number("Must be number")
    .typeError("open vacancies must be a number")
    .required("Open vacancies is required*")
    .positive("Must be a positive number")
    .integer("Must be an integer"),
  deadline: Yup.string().required("Deadline is required*"),
  jobType: Yup.string().required("Job Type is required*"),
  department: Yup.string().required("Department is required*"),
  location: Yup.string().required("Job Location is required*"),
  jobRequirement: Yup.string().required("Job Requirement is required*"),
  jobPosition: Yup.array()
    .min(1, "Must have at least 1 items*")
    .max(10, "Must have less than or equal to 10 items*"),
  technicalSkill: Yup.array()
    .min(1, "Must have at least 1 items*")
    .max(10, "Must have less than or equal to 10 items*"),
  skillSet: Yup.array()
    .min(1, "Must have at least 1 items*")
    .max(10, "Must have less than or equal to 10 items*"),
  jobHeightLight: Yup.string().required("Job Height Light is required"),
});
