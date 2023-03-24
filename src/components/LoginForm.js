import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const LoginForm = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      //get value
      initialValues: initialValues,
      //validation
      validationSchema: signUpSchema,
      //then onsubmit call
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-block">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name ? <p>{errors.name} </p> : null}
        </div>
        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? <p>{errors.email} </p> : null}
        </div>
        <div className="input-block">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <p>{errors.password} </p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="password" className="input-label">
            Confirm - Password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.confirm_password && errors.confirm_password ? (
            <p>{errors.confirm_password} </p>
          ) : null}
        </div>
        <Link to={"/"} className="button" type="Submit">
          Submit
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
