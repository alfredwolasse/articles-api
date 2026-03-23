const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - author
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the article
 *         title:
 *           type: string
 *           description: The title of the article
 *         content:
 *           type: string
 *           description: The content of the article
 *         author:
 *           type: string
 *           description: The author of the article
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The creation date of the article
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The last update date of the article
 *     ArticleInput:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - author
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the article
 *         content:
 *           type: string
 *           description: The content of the article
 *         author:
 *           type: string
 *           description: The author of the article
 */

 /**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Returns the list of all articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: The list of articles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Article'
 */
router.get('/', articlesController.getAll);

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Get an article by ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The article ID
 *     responses:
 *       200:
 *         description: The article details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Article'
 *       404:
 *         description: Article not found
 */
router.get('/:id', articlesController.getById);

/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Create a new article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ArticleInput'
 *     responses:
 *       201:
 *         description: Article created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Article'
 *       400:
 *         description: Bad request - missing required fields
 */
router.post('/', articlesController.create);

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Update an article by ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The article ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ArticleInput'
 *     responses:
 *       200:
 *         description: Article updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Article'
 *       404:
 *         description: Article not found
 */
router.put('/:id', articlesController.update);

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Delete an article by ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The article ID
 *     responses:
 *       200:
 *         description: Article deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: Article not found
 */
router.delete('/:id', articlesController.delete);

module.exports = router;
