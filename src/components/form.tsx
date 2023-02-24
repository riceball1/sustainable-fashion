import styles from '@/styles/Form.module.css'
import { useState, useEffect } from 'react'
import MaterialOptions from '@/components/materialOptions'
import Button from '@/components/button'
import { Material } from '@/interfaces/types'

interface Props {
  onCalculateSustainabilityScore: (materials: Material[]) => void
  onHandleToast: (message: string) => void
}

interface State {
  id: string
  name: string
  percentage: number
}

function Form({ onHandleToast, onCalculateSustainabilityScore }: Props) {
  const generateId = () => `id${Math.random() * 10}`
  const [state, setState] = useState<State[]>([
    { id: generateId(), name: 'rayon', percentage: 50 },
    { id: generateId(), name: 'cotton', percentage: 50 },
  ])

  const [error, setError] = useState({ message: '', hasError: false })

  useEffect(() => {
    // check if state changes and clear errors
    setError({ message: '', hasError: false })
  }, [state])

  const handleAnalyzeMaterials = () => {
    setError({ message: '', hasError: false })

    // check if total percentage is 100
    const percentageTotal = state
      .map((item) => Number(item.percentage))
      .reduce((total, sum) => (total += sum), 0)

    // check if any of the percentage is 0
    const allPercentageFilled = state.every((item) => item.percentage)

    // check for duplicate names
    const hasDuplicateNames =
      new Set(state.map((item) => item.name)).size !== state.length

    if (!allPercentageFilled) {
      setError({
        message: 'Error! All materials needs percentage',
        hasError: true,
      })
    } else if (percentageTotal !== 100) {
      setError({ message: 'Error! Total needs to be 100%', hasError: true })
    } else if (hasDuplicateNames) {
      setError({ message: 'Error! Materials should be unique', hasError: true })
    } else {
      onHandleToast('Analyze Materials')
      onCalculateSustainabilityScore(state)
    }
  }

  const handleAddMaterial = () => {
    if (state.length < 5) {
      setState((prevState) => [
        ...prevState,
        { id: generateId(), name: 'rayon', percentage: 10 },
      ])
      onHandleToast('Added More Materials')
      // update the state so it will include additional material
    }

    // do nothing if number of materials exceed 5
  }

  const handleRemoveMaterial = (materialId: string) => {
    if (state.length > 1) {
      const index = state.findIndex((item) => {
        return item.id === materialId
      })

      const newState = [...state.slice(0, index), ...state.slice(index + 1)]
      setState(newState)
      onHandleToast('Removed Material')
    }
    // do nothing if there's only one item left
  }

  const handleOnChangeMaterial = ({
    selectedMaterial,
    materialId,
  }: {
    selectedMaterial: string
    materialId: string
  }) => {
    const item = state.filter((item) => item.id === materialId)[0]
    const index = state.findIndex((item) => {
      return item.id === materialId
    })
    const newItem = {
      ...item,
      name: selectedMaterial,
    }

    const newState = [...state]
    newState[index] = newItem
    setState(newState)
  }

  const handleOnChangePercentage = ({
    percentage,
    materialId,
  }: {
    percentage: number
    materialId: string
  }) => {
    const item = state.filter((item) => item.id === materialId)[0]
    const index = state.findIndex((item) => {
      return item.id === materialId
    })
    const newItem = {
      ...item,
      percentage,
    }

    const newState = [...state]
    newState[index] = newItem
    setState(newState)
  }

  return (
    <div className={styles.form}>
      <div className={styles.formInputs}>
        {state.map((item) => {
          return (
            <MaterialOptions
              onRemoveMaterial={handleRemoveMaterial}
              key={item.id}
              onChangePercentage={handleOnChangePercentage}
              onSelectMaterial={handleOnChangeMaterial}
              percentage={item.percentage}
              material={item.name}
              materialId={item.id}
            />
          )
        })}
      </div>

      <div className={styles.buttons}>
        <div>
          <Button
            onClick={handleAddMaterial}
            text="Add Material"
            type="secondary"
            disable={state.length === 5}
          />
          <p className={styles.message}>Limit of 5 materials.</p>
        </div>
        <div>
          <Button onClick={handleAnalyzeMaterials} text="Analyze" />
          {error.hasError && (
            <p className={styles.messageError}>{error.message}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Form
