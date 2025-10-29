import Card from "./Card";

export default {
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    title: "Default Card",
    content: "This is a default card content.",
  },
};
export const Colored = {
  args: {
    title: "Colored Card",
    content: "This is a colored card content.",
    backgroundColor: "#ffcc00",
  },
};
