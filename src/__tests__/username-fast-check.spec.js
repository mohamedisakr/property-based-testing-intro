const fc = require("fast-check");
const {
  isValidUsername,
  validateMinMaxLength,
} = require("../username-validation");

it("should verify username", () => {
  fc.assert(
    fc.property(
      fc.string({ minLength: 8, maxLength: 25 }),
      function (username) {
        const actual = isValidUsername(username);
        expect(actual).toBe(false);
      }
    ),
    { verbose: true }
  );
});

// it("should check validatiy for username", () => {
//   fc.assert(
//     fc.property(
//       fc.string(),
//       (username) => {
//         expect(isValidUsername(username)).toBe(true);
//       },
//       { verbose: true }
//     )
//   );
// });
