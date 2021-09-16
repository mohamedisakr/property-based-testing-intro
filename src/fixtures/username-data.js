const edgeTestCases = [
  // description, username, expected
  ["should fail for white space", ' {s"h%J!', false],
  ["should fail for special characters", 'z%{s"h%J!', false],
  ["should fail for special characters", '%{s"h%J!', false],
  ["should fail for special characters", "Vw(^<k(F'atWnj", false],
  ["should fail for special characters", "(F'atWnj", false],
  ["should fail for white space", " F'atWnj", false],
  ["should fail for special characters", "CRz,:G]^5O", false],
  ["should fail for special characters", "z,:G]^5O", false],
  ["should fail for white space", " ,:G]^5O", false],
];

const positiveTestCases = [
  // username, expected
  ["Guiseppe_Reichert", true],
  ["Randi_Volkman47", true],
  ["Aurelio90", true],
  ["Tiffany.White", true],
  ["Shana.Rutherford5", true],
  ["Johnnie.Cassin", true],
  ["Betsy.Brown63", true],
];

module.exports = { positiveTestCases, edgeTestCases };
