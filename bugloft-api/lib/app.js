import Koa from 'koa';
import mongoose from 'mongoose';
import jwtKoa from 'koa-jwt';
import middleware from './middleware';
import config from './config';
import api from './routes';
 
const app = new Koa();
// ======================
// 2. connect mongoose
// ====================== 
const MONGOOSE_CONNECT_MS = 5000;

mongoose.connection.on("connected", () => {
  if (["development", "test"].indexOf(process.env.NODE_ENV) > -1) {
    console.info(`DB Connected`);
  }
});

// if the connection throws an error
mongoose.connection.on("error", console.error);

// when the connection is disconnected
mongoose.connection.on("disconnected", () => console.info("DB disconnected"));

// console.log("MONGO_URI", process.env.MONGO_URI);
// connect
mongoose
  .connect(config.mongodb.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    serverSelectionTimeoutMS: MONGOOSE_CONNECT_MS,
  })
  .catch((e) => {
    console.log('error: ' + e);
  });
 
app.use(middleware())
  .use(jwtKoa({ secret: config.app.secret }).unless({
    path: config.app.whiteList
  }))
  .use(api())
  .listen(config.app.port, () => console.log(`Server listening on port ${config.app.port}`))

