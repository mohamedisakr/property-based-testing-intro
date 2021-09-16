// https://stackoverflow.com/questions/9628879/javascript-regex-username-validation

/* 
    Usernames can only have: 
      - Lowercase Letters (a-z) and (A-Z)
      - Numbers (0-9)
      - Dots (.)
      - Underscores (_)
*/
const isValidUsername = (username) => {
  const regex = /^[a-zA-Z0-9_\.]+$/g;
  if (username.match(regex)) {
    return true;
  }
  return false;
};

module.exports = isValidUsername;
