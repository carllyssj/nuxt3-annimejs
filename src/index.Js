import anime from 'animejs'
import pkg from '../package.json'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide("$anime", anime)
  return {
    provide: {
      anime: () => anime
    }
  }
})
export { pkg as meta } 
