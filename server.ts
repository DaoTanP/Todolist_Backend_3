import express from "express";
import 'dotenv/config';
import "reflect-metadata";
import swaggerUI from "swagger-ui-express";
import mainRoute from './src/routes/main';
import yaml from 'yamljs';
const swaggerJSDoc = yaml.load('./src/api_docs/todolist.yaml');
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc, { explorer: true }));

app.use('/', mainRoute);

app.listen(process.env.PORT, () => {
    console.log('listening on port: ' + process.env.PORT);
});