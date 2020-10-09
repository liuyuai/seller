window.addEventListener("unhandledrejection", event=>{
  console.log(event.reason);
});