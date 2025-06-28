module.exports = {
  apps: [
    {
      name: 'sayle-landing',
      script: 'dist/index.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
        FRONTEND_PORT: 3000,
        BACKEND_PORT: 5000,
        SERVER_HOST: '0.0.0.0'
      },
      env_production: {
        NODE_ENV: 'production',
        FRONTEND_PORT: 3000,
        BACKEND_PORT: 5000,
        SERVER_HOST: '0.0.0.0'
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      max_memory_restart: '1G',
      watch: false,
      ignore_watch: ['node_modules', 'logs'],
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
}; 