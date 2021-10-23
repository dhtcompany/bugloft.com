export default function(ctx, next){
    return next().catch((err) => {
      if (401 == err.status) {
        ctx.body = {
          status: 401,
          message: 'Please login to get access\n'
        }
      } else {
        throw err;
      }
    });
  }