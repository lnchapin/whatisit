import { pool } from '../db/index.mjs';
import Router from 'koa-router';

export const router = new Router({
  prefix: '/topics',
});


router.get('/', async ctx => {
    const { rows } = await pool.query(`
        SELECT t.topic, t.header, t.active, t.tsearched
        FROM topics t
      `
    );
    ctx.body = rows;
});