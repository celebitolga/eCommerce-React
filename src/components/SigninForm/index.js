import "./index.scss";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useFormik } from "formik";

// api
import { fetchLogin } from "../../api";

// validation
import signinValidation from "../../Validations/signinValidation";

// context
import { useAuth } from "../../context/AuthContext";

// urls
import urls from "../../urls";

function SigninForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinValidation,
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin({
          email: values.email,
          password: values.password,
        });

        login(loginResponse);

        if (searchParams.get('next')) {
          navigate(searchParams.get('next'));
        } else {
          navigate(urls.userUrls.PROFILE);
        }

      } catch (error) {
        bag.setErrors({ general: error });
      }
    },
  });

  return (
    <div className="signin-form">
      <div className="signin-form__wrapper">
        <div className="signin-form__header">
          <h1 className="signin-form__header-title">Sing In</h1>

          <p className="signin-form__header-error">
            {formik.errors.general && formik.errors.general}
          </p>
        </div>
        <div className="signin-form__form-holder">
          <form onSubmit={formik.handleSubmit}>
            <div className="input-holder">
              <label htmlFor="signin_email">Email</label>
              <input
                id="signin_email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                name="email"
                className={`${
                  formik.errors.email && formik.touched.email ? "-error" : ""
                }`}
              />
            </div>

            <div className="input-holder">
              <label htmlFor="signin_password">Password</label>
              <input
                id="signin_password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${
                  formik.errors.password && formik.touched.password
                    ? "-error"
                    : ""
                }`}
              />
            </div>

            <button type="submit">Sing In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;
