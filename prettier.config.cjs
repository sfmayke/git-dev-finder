const prettierPluginTailwind = require('prettier-plugin-tailwindcss')

module.exports = {
  plugins: [prettierPluginTailwind],
  tailwindConfig: './tailwind.config.cjs',
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  useTabs: false,
}
