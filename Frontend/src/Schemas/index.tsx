import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  name: yup.string().required().min(2),
  username: yup.string().required().min(2),
  email: yup.string().email().required(),
  address: yup.string().required(),
  phoneno: yup.string().required(),
  password: yup.string().required("Password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"),
  confirmpassword: yup.string().oneOf([yup.ref('password'), ''], 'Passwords must match').required(),
});

export const validationloginSchema = yup.object().shape({

  username: yup.string().required().min(2),
  email: yup.string().email().required(),
  password: yup.string().required("Password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"),

});

export const propertyValidationSchema = yup.object().shape({
  location: yup.string().required(),
  type: yup.string().required(),
  price: yup.number().required(),
  sell: yup.boolean().required(),
  rent: yup.boolean().required(),
  pincode: yup.string().required(),
  description: yup.string().required(),
});


export const searchValidationSchema = yup.object().shape({
  pincode: yup.string().required(),
  type: yup.string().required(),
});
