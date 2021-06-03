// import { pool } from '../db/index.mjs';
import Router from 'koa-router';

export const router = new Router({
  prefix: '/authors',
});


router.get('/', async ctx => {
  console.log('here', ctx);
    // const { rows } = await pool.query(`
    //     SELECT a.info, a.url, a.fName, a.lName
    //     FROM author a
    //   `
    // );
    // ctx.body = rows;
});