import { Button } from "./button";

const buttonClicked = e => {
  e.preventDefault()
  alert("Button clicked")
};

export const primaryButton = () => <Button color={'primary'}> primary </Button>
export const secondaryButton = () => <Button color={'secondary'}> secondary </Button>
export const functionButton = () => <Button onClick={buttonClicked}> Click me </Button>


export default {
  title: "Atoms/Button",
  component: Button,
}
