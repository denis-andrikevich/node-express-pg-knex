export default function (err, req, res, next) {
  let result = {
    statusCode: 500,
    status: 'Error',
    message: (process.env.NODE_ENV === 'production') ? 'Йобана врот!!' : err.stack
  };

  if (err.status === 401) {
    result = {
      statusCode: 404,
      status: 'Not found',
      message: ''
    }
  }

  res.render('error', result);
}