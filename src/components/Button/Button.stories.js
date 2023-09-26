import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["soft", "text", "outlined", "contained"],
      control: { type: "select" },
    },
    color: {
      options: ["warning", "inherit", "info", "success", "secondary", "primary", "error"],
      control: { type: "select" },
    },
    size: {
      options: ["l", "m", "s"],
      control: { type: "select" },
    },
    state: {
      options: ["hovered", "disabled", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    endIcon: false,
    startIcon: false,
    label: true,
    variant: "soft",
    color: "warning",
    size: "l",
    state: "hovered",
    className: {},
    labelClassName: {},
    text: "Medium",
  },
};
