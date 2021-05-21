import { pool } from '../db/index.mjs';
import Router from 'koa-router';

export const router = new Router({
  prefix: '/authors',
});


router.get('/', async ctx => {
    const { rows } = await pool.query(`
        SELECT a.info, a.url, a.fName, a.lName
        FROM authors a
      `
    );
    ctx.body = rows;
});