/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  tailwindAttributes: ["tw"],
  tailwindFunctions: ["cva"],
  plugins: ["prettier-plugin-tailwindcss"],
};
