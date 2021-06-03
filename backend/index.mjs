import Koa from 'koa';
import bodyParser from 'koa-body';
import cors from '@koa/cors';
import dotenv from 'dotenv';
import { router } from './src/routes/index.mjs';

dotenv.config();

const app = new Koa();

app.use(cors({
  allowHeaders: ['Authorization', 'Content-Type']
}));

app.use(bodyParser({ multipart: true }));

app.use(router.routes());

app.listen(3000, () => console.log(`Accepting connections on ${3000}`));