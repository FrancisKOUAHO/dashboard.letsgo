module.exports = {
  "stories": ["../app/**/*.stories.mdx", "../app/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
