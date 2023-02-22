import styles from '@/styles/Toast.module.css';

interface Props {
    closeToast: () => void;
    isToastOpen?: boolean;
    message?: string;
}

function Toast({isToastOpen=false, message = "No message provided.", closeToast } : Props) {
    return <div className={`${styles.toast}${isToastOpen ? styles.show : ""}`}>
        <button onClick={closeToast}>close</button>
        <p>
            {message}
            </p>
            </div>
}

export default Toast;