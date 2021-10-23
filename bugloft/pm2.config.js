module.exports = {
  apps: [
    {
      name: 'flowforum',
      script: './server.js',
      cwd: './', // current workspace
      watch: [
        // watch directorys and restart when they change
        '.next'
      ],
      ignore_watch: [
        // ignore watch
        'node_modules',
        'logs',
        'static'
      ],
      instances: 2,  // start 2 instances
      node_args: '--harmony',
      env: {
        NODE_ENV: 'production',
        PORT: 3006
      },
      out_file: './logs/out.log', // normal log
      error_file: './logs/err.log', // error log
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z' // date format
    }
  ]
};
