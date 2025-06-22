/** @type {import("prettier").Config} */
export default {
  importOrder: [
    "^@shared/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^~.*$",
    "^[./]",
  ],
  importOrderSortSpecifiers: true,
  trailingComma: "all",
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
