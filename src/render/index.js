export default {
  name: "CoolName",

  componentName: "CoolName",

  props: {
    tag: {
      type: String,
      default: "h1"
    },
    name: {
      type: String,
      default: "我是你爸爸"
    }
  },

  computed: {},

  render(createElement) {
    return createElement("div", { style: { color: "red"
    } }, [this.name, createElement("h1", "一则头条"), createElement("h2", "二则头条")]);
  }
};
