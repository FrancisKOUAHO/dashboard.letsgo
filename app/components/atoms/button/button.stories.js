import Button from "./button";

const buttonClicked = e => {
  e.preventDefault()
  alert("Button clicked")
};

export const basicButton = () => <Button> Basic button </Button>
export const functionButton = () => (
  <Button onClick={buttonClicked}> Click me </Button>
)
export const LinkedButton = () => <button href="/route"> Linked button </button>


export default {
  title: "Atoms/Button",
  component: Button,
}
