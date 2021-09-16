const fc = require("fast-check");
const {
  isValidUsername,
  validateMinMaxLength,
} = require("../username-validation");

it.only("should verify username", () => {
  fc.assert(
    fc.property(fc.string({ minLength: 8, maxLength: 16 }), (username) =>
      isValidUsername(username)
    ),
    { verbose: true }
  );
});

it("should check validatiy for username", () => {
  fc.assert(
    fc.property(
      fc.string(),
      (username) => {
        expect(isValidUsername(username)).toBe(true);
      },
      { verbose: true }
    )
  );
});
