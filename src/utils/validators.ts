export const isEmpty = (value: String) => {
  return !value || !value.trim();
};
export const validatePassword = (password: string) => {
  if (isEmpty(password)) return "password is empty";
  if (password.length < 8) return "password should be 8 characters at least";
  if (!/[A-Z]/g.test(password))
    return "password should contain an uppercase letter (M, Y, ...etc)";
  if (!/[a-z]/g.test(password))
    return "password should contain a lowercase letter (a, m, ...etc)";
  if (!/[!-\/:-@-'{-~]/g.test(password))
    return "password should contain special character (#, @, ...etc)";
  return "";
};
export const validateEmail = (email: string) => {
  if (isEmpty(email)) return "email is empty";
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email) ? "" : "invalid email";
  return "";
};
