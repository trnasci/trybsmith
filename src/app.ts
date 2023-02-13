import express from 'express';
import productsRouter from './routers/productsRouter';
import usersRouter from './routers/usersRouter';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(usersRouter);

export default app;
