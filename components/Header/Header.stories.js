import Header from "./index.vue";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],

  render: (args) => ({
    components: {
      Header,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: "<Header />",
  }),
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedIn = {};
