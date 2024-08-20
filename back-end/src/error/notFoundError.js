export const validationError = class validationError extends Error {
  constructor(message) {
    super();
    this.status = 404;
    this.messageObject = message;
  }
};
