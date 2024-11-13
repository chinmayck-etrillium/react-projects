import useInput from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={emailValue}
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
          />
          <div className="control-error">
            {emailHasError && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
          <div className="control-error">
            {passwordHasError && <p>Please enter a valid password</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="button">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
