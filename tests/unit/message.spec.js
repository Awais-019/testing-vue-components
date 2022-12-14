import { mount } from "@vue/test-utils";
import Message from "@/components/Message.vue";

describe("Message.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = mount(Message, {
            props: { msg: "Hello Friends" }
        });
        expect(wrapper.text()).toContain("Hello Friends");

    });
});