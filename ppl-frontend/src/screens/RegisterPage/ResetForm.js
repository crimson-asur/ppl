const ResetForm = (props) => {
  return (
    <div className="register_sec">
      <h1>Reset Password</h1>
      <ul>
        <li>
          <span>Enter New Password</span>
          <input
            type="text"
            name="password"
            onChange={props.handleChange}
            placeholder="Enter your new password"
          />
        </li>
        <li>
          <span>Confirm Password</span>
          <input
            type="text"
            name="confirmPassword"
            onChange={props.handleChange}
            placeholder="Enter your password again"
          />
        </li>
        <li>
          <input onClick={props.handleSubmit} type="submit" value="Submit" />
        </li>
      </ul>
    </div>
  );
};

export default ResetForm;
