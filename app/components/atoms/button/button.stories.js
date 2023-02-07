import Button from "./button";
import {action} from "@storybook/addon-actions";

export const Text = () => {
  return(
    <Button onClick={action('clicked')} > Just a button </Button>
  )

}


export const Emoji = () => {
  return(
    <Button onClick={action('clicked')} >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  )
}

export default {
  title: 'Button',
  component: Button,
}
