import styles from "@/styles/Form.module.css";
import { useState } from "react";
import MaterialOptions from "./materialOptions";
import Button from "./button"


interface Props {
    onCalculateSustainabilityScore: (Material[]) => Number;
}

function Form({onCalculateSustainabilityScore} : Props) {
  const [state, setState] = useState([
    { id: 1, name: "null", percentage: 0 },
    { id: 2, name: "null", percentage: 0 },
  ]);

  const handleAnalyzeMaterials = () => {
    console.log('Analyze materials')
    onCalculateSustainabilityScore(state)
  }

  const handleAddMaterial = () => {
    if (state.length < 5) {
      console.log("Add more material");
      // update the state so it will include additional material
    }

    // do nothing if number of materials exceed 5
  };

  const handleRemoveMaterial = () => {
    if(state.length > 1) {
        console.log('Remove material')
    }
    // do nothing if there's only one item left
  }

  return (
    <>
      <div className={styles.form}>
        {state.map((item) => {
          return <MaterialOptions onRemoveMaterial={handleRemoveMaterial} key={item.name} onChangePercentage={() => {}} onSelectMaterial={() => {}}/>;
        })}
      </div>

      <div className={styles.buttons}>
        <div>
          <Button onClick={handleAddMaterial} text="Add Material" type="secondary"/>
          <p>Limit of 5 materials.</p>
        </div>
        <Button onClick={handleAnalyzeMaterials} text="Analyze" />
      </div>
    </>
  );
}

export default Form;
