import Cookie from "js-cookie";
import config from "_s/config";

const { COOKIE_DOMAIN } = config;

export const setCookie = (key, value, expires = 1) => {
  return Cookie.set(key, value, {
    domain: COOKIE_DOMAIN,
    expires: expires
  });
};

export const getCookie = key => {
  return Cookie.get(key, {
    domain: COOKIE_DOMAIN
  });
};

export const findChild = function(arr) {
  if (arr.length > 0) {
    let list = arr;
    let result = [];
    for (let i = 0; i < list.length; i++) {
      formatChild(result, list[i].subMenus);
    }
    return result;
  }
};
export const formatChild = function(res, data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].level === 3) {
      let path = "/" + data[i].state.split(".")[1] + "/" + data[i].state.split(".")[2];
      let name = data[i].state;
      let componentStr = data[i].state
        .split(".")
        .splice(1, 2)
        .join("/");
      res.push({
        path: path,
        name: name,
        component: () => import("_v/" + componentStr)
      });
    }
    if (data[i].subMenus && Array.isArray(data[i].subMenus)) {
      formatChild(res, data[i].subMenus);
    }
  }
};
