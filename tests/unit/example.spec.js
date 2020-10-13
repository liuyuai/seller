import { shallowMount, mount } from "@vue/test-utils";
import Home from "../../src/views/home";

describe("测试home组件", () => {
  it("测试message是否能渲染成功", () => {
    const msg = "new message";
    const wrapper = shallowMount(Home, {
      data() {
        return {
          message: msg
        };
      }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
