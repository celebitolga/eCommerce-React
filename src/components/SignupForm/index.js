import "./index.scss";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useFormik } from "formik";

// validation
import signupValidation from "../../Validations/signupValidation";

// api
import { fetchRegister } from "../../api";

// context
import { useAuth } from "../../context/AuthContext";

// urls
import urls from "../../urls";

function SignupForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      user: "user",
    },
    validationSchema: signupValidation,
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchRegister({
          email: values.email,
          password: values.password,
          user: values.user,
          orders: [],
        });

        login(registerResponse);

        if (searchParams.get("next")) {
          navigate(searchParams.get("next"));
        } else {
          navigate(urls.userUrls.PROFILE);
        }
      } catch (error) {
        bag.setErrors({ general: error });
      }
    },
  });

  return (
    <div className="signup-form">
      <div className="signup-form__wrapper">
        <div className="signup-form__header">
          <h1 className="signup-form__header-title">Sing Up</h1>

          <p className="signup-form__header-error">
            {formik.errors.general && formik.errors.general}
          </p>
        </div>

        <div className="signup-form__form-holder">
          <form onSubmit={formik.handleSubmit}>
            <div className="input-holder">
              <label htmlFor="signup_email">Email</label>
              <input
                id="signup_email"
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
              <label htmlFor="signup_password">Password</label>
              <input
                id="signup_password"
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

            <div className="input-holder">
              <label htmlFor="signup_password_confirm">Password</label>
              <input
                id="signup_password_confirm"
                type="password"
                name="passwordConfirm"
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${
                  formik.errors.passwordConfirm &&
                  formik.touched.passwordConfirm
                    ? "-error"
                    : ""
                }`}
              />
            </div>

            <div className="input-holder">
              <label>User</label>
              <label className="-default">
                <input
                  type="radio"
                  name="user"
                  value="user"
                  checked={formik.values.user === "user"}
                  onChange={formik.handleChange}
                />
                User
              </label>
              <label className="-default">
                <input
                  type="radio"
                  name="user"
                  value="admin"
                  checked={formik.values.user === "admin"}
                  onChange={formik.handleChange}
                />
                Admin
              </label>

              {/* <input
                id="signup_password_confirm"
                type="password"
                name="passwordConfirm"
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${
                  formik.errors.passwordConfirm &&
                  formik.touched.passwordConfirm
                    ? "-error"
                    : ""
                }`}
              /> */}
            </div>

            <button type="submit">Sing Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
