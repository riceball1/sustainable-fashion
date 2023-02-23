import styles from '@/styles/Result.module.css'

function Result({ data = {}, score = 0 }) {
  return (
    <div className={styles.result}>
      <h2>
        {score > 0
          ? `Sustainabilty score is ${score}`
          : "Please analyze materials to get sustainability score"}
      </h2>
    <div className={styles.percentageResult}>
      {score}%
    </div>
    </div>
  );
}

export default Result;
