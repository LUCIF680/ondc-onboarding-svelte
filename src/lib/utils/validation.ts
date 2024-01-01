import * as yup from 'yup';

const schema = yup.object().shape({
	ops: yup.number().oneOf([1, 2, 3]).required('Type of Business is required'),
	legal_entity_name: yup.string().required('Business name is required'),
	business_address: yup.string().required('Business address is required'),
	gst_no: yup.string().required('GST number is required'),
	name_as_per_pan: yup.string().required('Name as per PanCard is required'),
	pan_no: yup.string().required('Pan number is required'),
	date_of_incorporation: yup.string().required('Date of incorporation required'),
	address_of_authorised_signatory: yup.string().required('Personal address is required'),
	email_id: yup.string().email().required('Personal email is required'),
	mobile_no: yup.number().positive('Mobile number is required'),
	subscriber_id: yup.string().required('Subscriber Id is required'),
	subscriber_url: yup.string().required('Callback Url is required')
});

async function validate(data): null | Promise<Record<string, string>> {
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

export { validate };
