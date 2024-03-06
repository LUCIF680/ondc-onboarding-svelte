import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid email")
    .required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters"),
});

const signUpSchema = yup.object().shape({
  email: yup.string().email().required("Personal email is required"),
  password: yup.string().min(8),
  legal_entity_name: yup.string().required("Business name is required"),
  business_address: yup.string().required("Business address is required"),
  gst_no: yup
    .string()
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Invalid GST Number"
    )
    .required("GST number is required"),
  name_of_authorised_signatory: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, "Name can only contain letters, space")
    .required("Name of authorizsed signatory is required"),
  pan_name: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, "Name can only contain letters, space")
    .required("Name as per PanCard is required"),
  pan_no: yup
    .string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid Pan Number")
    .required("Pan number is required"),
  date_of_incorporation: yup.date("Invalid date"),
  address_of_authorised_signatory: yup
    .string()
    .required("Personal address is required"),
  mobile_no: yup
    .string()
    .matches(/^[0-9]{10}$/, "Invalid Mobile Number")
    .required("Mobile number is required"),
});

async function validate(schema, data) {
  try {
    await schema.validate(data, { abortEarly: false });
    return null;
  } catch (err) {
    const result = {};
    err.inner.map((error) => {
      result[error.path] = error.message;
    });
    return result;
  }
}

export { validate, signUpSchema, loginSchema };
