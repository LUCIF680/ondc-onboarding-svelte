import * as yup from "yup";

const loginSchema = yup.object().shape({
  email_id: yup.string().email().required("Personal email is required"),
});

const signUpSchema = yup.object().shape({
  email_id: yup.string().email().required("Personal email is required"),
  password: yup.string(),
  legal_entity_name: yup.string().required("Business name is required"),
  business_address: yup.string().required("Business address is required"),
  gst_no: yup.string().required("GST number is required"),
  name_as_per_pan: yup.string().required("Name as per PanCard is required"),
  pan_no: yup.string().required("Pan number is required"),
  date_of_incorporation: yup
    .string()
    .required("Date of incorporation required"),
  address_of_authorised_signatory: yup
    .string()
    .required("Personal address is required"),
  mobile_no: yup
    .number()
    .required("Mobile number is required")
    .positive("Mobile number must be postive"),
});

async function validate(schema, data): null | Promise<Record<string, string>> {
  try {
    await schema.validate(data, { abortEarly: false });
    return null;
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      const result = {};
      err.inner.map((error) => {
        result[error.path] = error.message;
      });
      return result;
    }
    throw err;
  }
}

export { validate, signUpSchema, loginSchema };
