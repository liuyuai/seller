import { Message } from "element-ui";

window.addEventListener("unhandledrejection", event => {
  event.preventDefault(); // 防止默认处理（例如将错误输出到控制台）
  showError(event.reason);
});

function showError(mes) {
  Message.error(mes);
}
