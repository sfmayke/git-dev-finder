const prettierPluginTailwind = require('prettier-plugin-tailwindcss')

module.exports = {
  plugins: [prettierPluginTailwind],
  tailwindConfig: './tailwind.config.cjs',
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  useTabs: false,
}
