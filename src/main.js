import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = event => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: el => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

createApp(App).directive("click-outside", clickOutside).mount('#app')
