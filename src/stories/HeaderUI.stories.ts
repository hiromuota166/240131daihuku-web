import { StoryObj, Meta } from "@storybook/react";
import HeaderUI from "../components/HeaderUI";

const meta = {
  title: "Components/HeaderUI",
  component: HeaderUI,
  args: {
    login: true,
  },
} satisfies Meta<typeof HeaderUI>;

export default meta;
type Story = StoryObj<typeof HeaderUI>;

export const IsNotLogin: Story = {
  args: {
    login: false,
  },
};

// export const IsNightMode: Story = {
//   args: {
//     colorMode: "dark",
//   },
// };
