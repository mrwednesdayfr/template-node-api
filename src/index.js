import Fastify from 'fastify';
import cors from 'fastify-cors';

const app = Fastify({ logger: true });
app.register(cors, { origin: true });

const PORT = process.env.PORT || 3000;
const GREETING = process.env.GREETING || 'Hello from ShardCloud Template!';

app.get('/', async () => {
  return {
    status: 'ok',
    message: GREETING,
    version: '0.1.0',
    docs: '/docs (no repo — veja a pasta docs no GitHub)'
  };
});

app.get('/health', async () => ({ ok: true }));

app.listen({ port: Number(PORT), host: '0.0.0.0' }).then(() => {
  app.log.info(`Listening on http://localhost:${PORT}`);
});
