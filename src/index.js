require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');

const articlesRoutes = require('./routes/articles');
const swaggerSpec = require('./config/swagger');
const { initDatabase } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/articles', articlesRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

initDatabase();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Server is ready:`);
  console.log(`🔗 Web Interface:    http://0.0.0.0:${PORT}`);
  console.log(`📚 API Docs:        http://0.0.0.0:${PORT}/api-docs`);
  console.log(`🌍 Environment:     ${process.env.NODE_ENV || 'development'}`);
  console.log(`📦 Port:            ${PORT}\n`);
});
