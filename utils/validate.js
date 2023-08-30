export const checkValidata = (email, password, name) => {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidName = /^[A-Za-z][A-Za-z0-9_]{4,29}$/.test(name);

  if (!isEmailValid) return "Email must be valid email";
  if (!isPasswordValid) return "Please Enter valid Password";
  if (!isValidName) return "Name Should be 5 Charecters";

  return null;
};
