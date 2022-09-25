const app = Vue.createApp({
  data() {
    return {
      userCSS: "",
      userStyle: "",
      userColor: "",
    };
  },

  methods: {
    showHide() {
      if (this.userStyle === "hidden") {
        this.userStyle = "visible";
      } else {
        this.userStyle = "hidden";
      }
    },
  },
});

app.mount("#assignment");
