import { mount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

describe("Nav.vue", () => {
    test('render a profile link', () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn: true,
                }
            }
        });

        const profileLink = wrapper.get('#profile');
        expect(profileLink.text()).toEqual('My Profile');

    });

    test('should not render a profile link', () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn: false,
                }
            }
        });

        const profileLink = wrapper.find("#profile");
        expect(profileLink.exists()).toBe(false)
    });
});