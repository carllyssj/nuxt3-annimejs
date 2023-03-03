import anime from 'animejs';
import { createApp } from 'vue';
const app = createApp({});
app.directive('anime', (el, binding) => {
  anime({ targets: el, ...binding.value })
  if (binding.modifiers.set) {
    anime.set(el, { ...binding.value })
  }
})
export default {
  inject: {
    anime
  }
}
