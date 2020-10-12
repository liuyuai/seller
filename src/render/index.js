export default {
  name: 'CoolName',
  
  componentName: 'CoolName',
  
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    name:{
      type:String,
      default: '我是你爸爸'
    }
  },
  
  computed: {
  },
  
  render(createElement) {
    console.log(this.$slots.default);
    return createElement(
        this.tag,this.$slots.default
    );
  }
};
