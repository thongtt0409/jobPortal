export const errorHandler = (err, req, res, next) => {
  const messageError = err.messageObject || err.message;
  const error = {
    status: 'Error',
    error: messageError,
  };
  const status = err.status || 400;
  return res.status(status).json(error);
};
