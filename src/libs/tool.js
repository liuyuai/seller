import Cookie from "js-cookie";
import config from "_s/config";

const { COOKIE_DOMAIN } = config;

export const setCookie = (key, value, expires) => {
  return Cookie.set(key, value, {
    domain: COOKIE_DOMAIN,
    expires: 1
  });
};

export const getCookie = key => {
  return Cookie.get(key, {
    domain: COOKIE_DOMAIN
  });
};
