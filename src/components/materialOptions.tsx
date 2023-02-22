import styles from "@/styles/MaterialOptions.module.css";

interface MaterialOptions {
    onRemoveMaterial: () => {};
    onChangePercentage: () => {};
    onSelectMaterial: () => {};
}

function MaterialOptions({onRemoveMaterial, onChangePercentage, onSelectMaterial} : MaterialOptions)  {


  return (
    <div className={styles.materialOptions}>
      <select name="materials" id="materials" onChange={onSelectMaterial}>
        <option value="rayon">rayon</option>
        <option value="polyster">polyster</option>
        <option value="acrylic">acrylic</option>
        <option value="nylon">nylon</option>
        <option value="cotton">cotton</option>
        <option value="hemp">hemp</option>
        <option value="linen">linen</option>
        <option value="lyocell">lyocell</option>
        <option value="organic-cotton">organic cotton</option>
      </select>
      <input type="number" placeholder="%" onChange={onChangePercentage}/>
      <button onClick={onRemoveMaterial}>remove</button>
    </div>
  );
}

export default MaterialOptions;