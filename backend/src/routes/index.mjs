import Router from 'koa-router';
import { router as authorRouter } from './authors.mjs';
import { router as topicsRouter } from './topics.mjs';

export const router = new Router();

router.use('/api', authorRouter.routes(), authorRouter.allowedMethods());
router.use('/api', topicsRouter.routes(), topicsRouter.allowedMethods());
