import styles from "@/styles/Form.module.css";
import { useState } from "react";
import MaterialOptions from "@/components/materialOptions";
import Button from "@/components/button";
import { Material } from "@/interfaces/types";

interface Props {
  // onCalculateSustainabilityScore: (Material[]) => Material[];
  onHandleToast: () => void;
}

function Form({onHandleToast}) {
  const [state, setState] = useState([
    { id: 1, name: "rayon", percentage: 50 },
    { id: 2, name: "organic cotton", percentage: 50 },
  ]);

  const [error, setError] = useState(false);

  const handleAnalyzeMaterials = () => {
    setError(false);
    const percentageTotal = state
      .map((item) => item.percentage)
      .reduce((total, sum) => (total += sum), 0);

    console.log(percentageTotal)
    if (percentageTotal !== 100) {
      setError(true);
    }
    console.log("Analyze materials");
    // onCalculateSustainabilityScore(state)
    onHandleToast('Analyze Materials')
  };

  const handleAddMaterial = () => {
    if (state.length < 5) {
      console.log("Add more material");
      onHandleToast('Added More Materials')
      // update the state so it will include additional material
    }

    // do nothing if number of materials exceed 5
  };

  const handleRemoveMaterial = () => {
    if (state.length > 1) {
      console.log("Remove material");
      onHandleToast('Removed Material')
    }
    // do nothing if there's only one item left
  };

  return (
    <div className={styles.form}>
      <div className={styles.formInputs}>
        {state.map((item) => {
          return (
            <MaterialOptions
              onRemoveMaterial={handleRemoveMaterial}
              key={item.name}
              onChangePercentage={() => {}}
              onSelectMaterial={() => {}}
              percentage={item.percentage}
            />
          );
        })}
      </div>

      <div className={styles.buttons}>
        <div>
          <Button
            onClick={handleAddMaterial}
            text="Add Material"
            type="secondary"
          />
          <p className={styles.message}>Limit of 5 materials.</p>
        </div>
        <div>
          <Button onClick={handleAnalyzeMaterials} text="Analyze" />
          {error && (
            <p className={styles.messageError}>Error! total needs to be 100%</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
