export class HttpError extends Error {
  constructor(error) {
    super();
    this.error = error;
    this.code = -1;
    this.message = "网络异常，请稍后重试";
  }
}

export class ResponseError extends Error{
  constructor(data) {
    super();
    this.code = 200;
    this.data = data;
  }
}
export class RequestError extends Error {
  constructor(data) {
    super();
    this.message = data.message;
  }
}
