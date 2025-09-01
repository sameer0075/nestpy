import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

const app = express();
const port = 3000;

const controller = new AppController(new AppService());

// Proxy Python requests to the Flask server
app.use('/python', createProxyMiddleware({
  target: 'http://127.0.0.1:5000', // Flask server URL
  changeOrigin: true,
  pathRewrite: {
    '^/python': '', // Remove '/python' prefix before forwarding to Flask
  },
}));

// Node.js route
app.get('/node/hello', (req, res) => {
  res.send(controller.getHello());
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Node.js server running at http://localhost:${port}/node/hello`);
  console.log(`✅ Flask server (via proxy) running at http://localhost:${port}/python/hello`);
});
