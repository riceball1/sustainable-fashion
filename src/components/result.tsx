import styles from '@/styles/Result.module.css'

function Result({ data = {}, score = 0 }) {
  const GOOD_THRESHOLD_MIN = 8
  const color = score > GOOD_THRESHOLD_MIN ? 'green' : 'red'

  return (
    <div className={styles.result}>
      <h2>
        {score > 0
          ? `Sustainabilty score is:`
          : 'Please analyze materials to get sustainability score'}
      </h2>
      <div className={styles.percentageResult} style={{ color: color }}>
        {score}
      </div>
    </div>
  )
}

export default Result
