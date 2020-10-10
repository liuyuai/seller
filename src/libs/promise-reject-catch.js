import { Message} from "element-ui";

window.addEventListener("unhandledrejection", event=>{
  event.preventDefault();
  showError(event.reason)
});

function showError(mes) {
  Message.error(mes);
}