import { Material } from '@/interfaces/types'

// function used to calculate the materials percentage in the clothing item
// the return value will be a percentage based on if it's more or less sustainable

export const calculcateSustainablity = (materials: Material[]) => {
  // used the scale provided by https://ethicalista.com/sustainable-fabrics/

  /*
  Formula:
  percentage of fabric * weight on scale = weighted score
  add all the weighted scores / total percentage (100%)
  scores below a certain number is considered less sustainable, scores above the number is more sustainable
  */

  enum SCALE {
    A = 10, //   A (Best)
    B = 9, //  B (Good)
    C = 8, // C (Okay)
    D = 7, // D (Bad)
    E = 6, // E (Terrible)
  }

  interface FabricScale {
    [key: string]: number
  }

  const fabricScale: FabricScale = {
    hemp: SCALE.B,
    linen: SCALE.B,
    lyocell: SCALE.A,
    'organic cotton': SCALE.B,
    rayon: SCALE.D,
    polyster: SCALE.E,
    acrylic: SCALE.E,
    nylon: SCALE.E,
    cotton: SCALE.D,
  }

  let score = 0

  // iterate over the materials array
  // to get calculated score

  for (const material of materials) {
    const { name, percentage } = material
    // @ts-ignore
    score += fabricScale[name] * percentage
  }
  return score / 100
}
