export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide("$anime", anime)
  return {
    provide: {
      anime: () => anime
    }
  }
})
