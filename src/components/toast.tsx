import styles from '@/styles/Toast.module.css'
import { useEffect } from 'react'

interface Props {
  closeToast: () => void
  isToastOpen?: boolean
  message?: string
}

function Toast({
  isToastOpen = false,
  message = 'No message provided.',
  closeToast,
}: Props) {
  useEffect(() => {
    const interval = setInterval(() => {
      closeToast()
    }, 5000)
    return () => clearInterval(interval)
  }, [closeToast])

  return isToastOpen ? (
    <div className={`${styles.toast}`}>
      <div className={styles.toastHeader}>
        <button onClick={closeToast} className={styles.toastButton}>
          close ❌
        </button>
      </div>
      <p>{message}</p>
    </div>
  ) : null
}

export default Toast
