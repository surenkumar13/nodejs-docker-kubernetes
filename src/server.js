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

        <title>My Web Page</title>

      </head>

      <body>

        <h1>Hello World!</h1>

        <p>This is some HTML content.</p>

      </body>

    </html>

  `;
  res.setHeader('Content-Type', 'text/html');

  res.send(htmlContent);
});


app.listen(PORT, HOST);

console.log(`Running version 3 on http://${HOST}:${PORT}`);