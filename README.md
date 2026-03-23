# Articles Management API

A RESTful API for managing articles with full CRUD operations, built with Express.js and SQLite.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete articles
- **RESTful API**: Clean API design following REST principles
- **Swagger Documentation**: Interactive API documentation with Swagger UI
- **Web Interface**: User-friendly web interface to manage articles
- **SQLite Database**: Zero-configuration, file-based database

## Tech Stack

- **Backend**: Express.js (Node.js)
- **Database**: SQLite (via better-sqlite3)
- **Documentation**: Swagger/OpenAPI
- **Frontend**: Vanilla HTML/CSS/JS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd articles-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser:
- **Web Interface**: http://localhost:3000
- **API Documentation**: http://localhost:3000/api-docs

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/articles` | Get all articles |
| GET | `/api/articles/:id` | Get article by ID |
| POST | `/api/articles` | Create new article |
| PUT | `/api/articles/:id` | Update article |
| DELETE | `/api/articles/:id` | Delete article |

### Request Examples

**Create Article:**
```bash
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -d '{"title": "My First Article", "content": "Article content here", "author": "John Doe"}'
```

**Get All Articles:**
```bash
curl http://localhost:3000/api/articles
```

**Get Article by ID:**
```bash
curl http://localhost:3000/api/articles/1
```

**Update Article:**
```bash
curl -X PUT http://localhost:3000/api/articles/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "content": "Updated content", "author": "Jane Doe"}'
```

**Delete Article:**
```bash
curl -X DELETE http://localhost:3000/api/articles/1
```

### Response Format

```json
{
  "success": true,
  "data": { ... }
}
```

## Project Structure

```
articles-api/
├── public/
│   └── index.html          # Web interface
├── src/
│   ├── config/
│   │   ├── database.js     # SQLite configuration
│   │   └── swagger.js      # Swagger configuration
│   ├── controllers/
│   │   └── articlesController.js
│   ├── models/
│   │   └── Article.js      # Article model
│   ├── routes/
│   │   └── articles.js     # API routes with Swagger docs
│   └── index.js            # Application entry point
├── data/                    # SQLite database files
├── .env                    # Environment variables
├── package.json
└── README.md
```

## Development

Run in development mode with auto-reload:
```bash
npm run dev
```

## Deploy on Render (Optional)

1. Create a `render.yaml` file or connect your GitHub repo to Render
2. Set the build command: `npm install`
3. Set the start command: `npm start`
4. Deploy

## License

MIT
# articles-api
