export const validationError = class validationError extends Error {
  constructor(message) {
    super();
    this.status = 422;
    this.messageObject = message;
  }
};
