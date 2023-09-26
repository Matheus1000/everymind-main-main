import { TextField } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    variant: {
      options: ["outlined", "filled", "standard"],
      control: { type: "select" },
    },
    size: {
      options: ["m", "s"],
      control: { type: "select" },
    },
    state: {
      options: ["enabled", "focused", "hovered", "error", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    underline: true,
    select: false,
    label: true,
    startAdornment: false,
    helpText: false,
    scrollMultiline: false,
    endAdornment: false,
    variant: "outlined",
    size: "m",
    state: "enabled",
    hasValue: true,
    className: {},
    inputClassName: {},
    valueClassName: {},
    text: "Value",
    text1: "Label",
    maskLabelClassName: {},
  },
};
