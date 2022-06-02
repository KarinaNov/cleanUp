module.exports = {
  publicPath: "/clean-up/",
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles.scss"; ',
      },
    },
  },
};
