import Progress from "./Progress";

export default {
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export const Default = {
  args: {
    value: 50,
    max: 100,
  },
};
export const Colored = {
  args: {
    value: 70,
    max: 100,
    color: "#4caf50",
  },
};
export const CustomColor = {
  args: {
    value: 30,
    max: 100,
    color: "#ff5722",
  },
};

export const BlueProgress = {
  args: {
    value: 80,
    max: 100,
    color: "#2196f3",
  },
};

export const RedProgress = {
  args: {
    value: 25,
    max: 100,
    color: "#f44336",
  },
};

export const StripedProgress = {
  args: {
    value: 60,
    max: 100,
    color: "#9c27b0",
    striped: true,
  },
};
