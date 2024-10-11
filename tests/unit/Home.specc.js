import { mount } from '@vue/test-utils';
import Home from '@/views/HomeView.vue';

describe('HomeView.vue', () => {
  it('renders home page', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.text()).toMatch('Home Page');
  });
});
