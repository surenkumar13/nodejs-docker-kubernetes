'use strict';

const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
	const htmlContent = `

    <!DOCTYPE html>

    <html>

      <head>

        <title>Demo - Launch Container Deployment-v9.1.0!</title>

      </head>

      <body>

        <h1> Demo - Launch Container Deployment-v9.1.0!</h1>

        <p>HCL DevOps Deploy automates application deployment, middleware configuration, and database updates across on-premise and cloud-based development, testing, and production environments</p>

      </body>

    </html>

  `;
  res.setHeader('Content-Type', 'text/html');

  res.send(htmlContent);
});


app.listen(PORT, HOST);

console.log(`Running version 3 on http://${HOST}:${PORT}`);