export const validateForm = (email, password) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isEmailValid)
    return "Invalid Format: Please enter a valid email address.";
  if (!isPasswordValid)
    return "Password must be 6-16 characters long, contain at least one digit, and include at least one special character";

  return null;
};
