import { HelpText } from ".";

export default {
  title: "Components/HelpText",
  component: HelpText,
  argTypes: {
    state: {
      options: ["success", "error", "active", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: true,
    state: "success",
    className: {},
    text: "Caption text, description, notification",
  },
};
