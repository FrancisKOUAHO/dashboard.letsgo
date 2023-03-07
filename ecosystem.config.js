const path = require("path");
const nextConfig = require("./next.config");
module.exports = {
  apps: [
    {
      name: 'dashboard.letsgoeurope.fr',
      instances: "max",
      exec_mode: "cluster",
      script: path.resolve('./node_modules/.bin/next'),
      args: 'start -p 3030',
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: 3030,
      },
    },
  ],
  ...nextConfig,
};
