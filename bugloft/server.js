const express = require('express');
const cp = require('child_process');
const next = require('next');
const { publicRuntimeConfig, serverRuntimeConfig } = require('./next.config');

const { isDev } = publicRuntimeConfig;
const { PORT } = serverRuntimeConfig;

const dev = isDev;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/topicDetail/:id', (req, res) => {
      const { id } = req.params;
      return app.render(req, res, '/topicDetail', { id });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      const serverUrl = `http://localhost:${PORT}`;
      console.log(`> Ready on ${serverUrl}`);
      // The development environment starts automatically
      if (dev) {
        switch (process.platform) {
          //Mac system use the following command to open the url in the browser
          case 'darwin':
            cp.exec(`open ${serverUrl}`);
            break;
          //win system use the following command to open the url in the browser
          case 'win32':
            cp.exec(`start ${serverUrl}`);
            break;
          // Default mac system
          default:
            cp.exec(`open ${serverUrl}`);
        }
      }
    });
  });

