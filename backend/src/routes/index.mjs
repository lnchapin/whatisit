import Router from 'koa-router';
import { router as authorRouter } from './authors.mjs';
import { router as topicsRouter } from './topics.mjs';

export const router = new Router();

router.use('/api/authors', authorRouter.routes(), authorRouter.allowedMethods());
router.use('/api/topics', topicsRouter.routes(), topicsRouter.allowedMethods());
