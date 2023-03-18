import * as Yup from "yup";

// validation schema
export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  // shortDescription: Yup.string()
  //   .required("Short Description is required")
  //   .min(13, "Short Description must be 5 characters"),
  picture: Yup.mixed()
    .required("Image is required")
    .nullable()
    .test(
      "fileType",
      "Only accept Jpg/Jpeg/Png/webp/gif file type",
      (file) =>
        file &&
        [
          "image/png",
          "image/jpg",
          "image/jpeg",
          "image/webp",
          "image/gif",
        ].includes(file.type)
    ),
});
