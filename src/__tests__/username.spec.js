const fc = require("fast-check");
const {
  isValidUsername,
  validateMinMaxLength,
} = require("../username-validation");

it("should verify username", () => {
  fc.assert(
    fc.property(fc.string(), (username) => isValidUsername(username)),
    { verbose: true }
  );
});
