import { mount } from '@vue/test-utils';
import UserForm from './FormData.vue';

describe('FormData.vue', () => {
  it('submits the form with valid data', async () => {
    const wrapper = mount(UserForm);
    await wrapper.setData({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });

    await wrapper.find('form').trigger('submit.prevent');

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/users', expect.any(Object));
  });
});
