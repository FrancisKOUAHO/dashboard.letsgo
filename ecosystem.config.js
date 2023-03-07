module.exports = {
  apps: [
    {
      name: 'dashboard.letsgoeurope.fr',
      instances : "max",
      exec_mode : "fork",
      script: 'node_modules/next/dist/bin/next',
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: 3030,
      },
    }
  ]
}
