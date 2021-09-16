const {
  positiveTestCases,
  edgeTestCases,
} = require("../fixtures/username-data");
const { isValidUsername } = require("../username-validation");

describe("username happy test cases", () => {
  it.each(positiveTestCases)(
    // username, actual
    "%s  %s",
    (username, actual) => {
      const expected = isValidUsername(username);
      expect(expected).toEqual(actual);
    }
  );
});

describe("username edge test cases", () => {
  it.each(edgeTestCases)(
    // description username, actual
    "%s <%s>",
    (description, username, actual) => {
      const expected = isValidUsername(username);
      expect(expected).toEqual(actual);
    }
  );
});
