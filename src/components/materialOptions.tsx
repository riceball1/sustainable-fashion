import styles from '@/styles/MaterialOptions.module.css'
import Button from './button'
import Select, { SingleValue } from 'react-select'
interface MaterialOptions {
  onRemoveMaterial: (materialId: string) => void
  onChangePercentage: ({
    percentage,
    materialId,
  }: {
    percentage: number
    materialId: string
  }) => void
  onSelectMaterial: ({
    selectedMaterial,
    materialId,
  }: {
    selectedMaterial: string
    materialId: string
  }) => void
  percentage: number
  material: string
  materialId: string
}

function MaterialOptions({
  onRemoveMaterial,
  onChangePercentage,
  onSelectMaterial,
  percentage,
  material,
  materialId,
}: MaterialOptions) {
  const options = [
    { value: 'rayon', label: 'rayon' },
    { value: 'polyster', label: 'polyster' },
    { value: 'acrylic', label: 'acrylic' },
    { value: 'nylon', label: 'nylon' },
    { value: 'cotton', label: 'cotton' },
    { value: 'hemp', label: 'hemp' },
    { value: 'linen', label: 'linen' },
    { value: 'lyocell', label: 'lyocell' },
    { value: 'organic cotton', label: 'organic cotton' },
  ]

  const selectedOption = options.filter((item) => item.value === material)[0]

  const handleSelectMaterial = (
    newValue: SingleValue<{ value: string; label: string }>,
  ) => {
    onSelectMaterial({
      selectedMaterial: newValue?.value || 'rayon',
      materialId: materialId,
    })
  }

  const handlePercentageChange = (percentage: number) => {
    onChangePercentage({ percentage, materialId })
  }

  return (
    <div className={styles.materialOptions}>
      <div className={styles.materialOptionsInputs}>
        <Select
          onChange={handleSelectMaterial}
          value={selectedOption}
          options={options}
          className={styles.materialOptionsSelect}
        />
        <input
          type="number"
          placeholder="%"
          onChange={(e) => handlePercentageChange(Number(e.target.value))}
          className={styles.materialOptionsInput}
          min={1}
          max={100}
          required
          value={percentage}
        />
      </div>
      <Button
        onClick={() => onRemoveMaterial(materialId)}
        text="remove"
        type="alert"
      />
    </div>
  )
}

export default MaterialOptions
