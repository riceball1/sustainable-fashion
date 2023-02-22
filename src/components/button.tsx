import styles from '../styles/Button.module.css'

interface Props {
    text: String;
    onClick: () => void;
    type?: string;
}

function Button({onClick, text, type = "primary"} : Props) {

    const buttonType = {
        primary: styles.primary,
        secondary: styles.secondary,
        alert: styles.alert
    }

    return <button className={buttonType[type]} onClick={onClick}>{text}</button>
}

export default Button;