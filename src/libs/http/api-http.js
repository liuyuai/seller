import HttpRequest from "./http-request";
import config from "_s/config";

const HTTP_SETTING = config.HTTP;

const WITH_CREDENTIALS = HTTP_SETTING.WITH_CREDENTIALS;
const TIMEOUT = HTTP_SETTING.TIME_OUT;

export const createRequest = (options = {}) => {
  let {
    baseUrl,
    withCredentials = WITH_CREDENTIALS,
    timeout = TIMEOUT
  } = options;
  return new HttpRequest({
    baseUrl,
    withCredentials,
    timeout
  });
};
