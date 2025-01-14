const http = require("http");

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head>
        <title>Node.js Plugin Preview</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
          }
          h1 {
            color: #007BFF;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to Your Acode Plugin Server!</h1>
        <p>This is the output of your Node.js server.</p>
      </body>
    </html>
  `);
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
