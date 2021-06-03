import Router from 'koa-router';
import myknex from '../db/index.mjs';


export const router = new Router({
  prefix: '/topics',
});


router.get('/', async ctx => {
  await myknex('topic')
    .select().then((topics) => {
      console.log(topics);
      ctx.body = topics
    });
  return ctx.body
});

router.get('/:id', async ctx => {
  const { id } = ctx.params;
  await myknex('topic')
  .where("id", id).then((topic) => {
      console.log(topic);
      ctx.body = topic
    });
  return ctx.body
});