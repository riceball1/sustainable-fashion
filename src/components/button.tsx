import styles from "../styles/Button.module.css";

interface Props {
  text: String;
  onClick: () => void;
  type?: string;
  disable?: boolean;
}

function Button({ onClick, text, type = "primary", disable = false }: Props) {
  const buttonType = {
    primary: styles.primary,
    secondary: styles.secondary,
    alert: styles.alert,
    disable: styles.disable
  };

  if(disable) {
    type = 'disable'
  }
  
  return (
    <button
    // @ts-ignore
      className={`${buttonType[type]} ${styles.button}`}
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </button>
  );
}

export default Button;
