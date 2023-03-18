import * as Yup from "yup";

// validation schema
export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required*"),
  email: Yup.string().required("Email is required*").email("Invalid Email"),
  phone: Yup.string()
    .required("Phone is required*")
    .min(10, "Phone must be 10 digit"),
  positionFor: Yup.string().required("Position required*"),
  document: Yup.mixed().required("Document is required"),
});
