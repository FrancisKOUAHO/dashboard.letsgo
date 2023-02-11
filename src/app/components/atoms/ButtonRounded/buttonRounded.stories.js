import ButtonRounded from "./buttonRounded";
const buttonClicked = e => {
  e.preventDefault()
  alert("Button clicked")
};

export const primaryButton = () => <ButtonRounded color="primary"> primary </ButtonRounded>
export const disabledButton = () => <ButtonRounded disabled={true}> disabled </ButtonRounded>
export const linkButton = () => <ButtonRounded href={'#'} onClick={buttonClicked}> link </ButtonRounded>


export default {
  title: "Atoms/ButtonRounded",
  component: ButtonRounded,
}
