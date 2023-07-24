import { Label } from "./Label";

export default {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};

export const Default = {
  render: () => <Label color="#000000" />,
};
