import { FeatureModel } from "src/features/projects/models";

const increaseValue = (value: string): string => String(Number(value) + 1);
const joinValue = (value: string[]): string => value.join(".");

export const onAddFeature = (featureState: FeatureModel[], value: FeatureModel, level: string): FeatureModel[] => {
   const indexFined: number = featureState.findIndex((feature: FeatureModel) => {
      return feature.level === level
   })
   const arrayLevel = level.split('.')
   let newArrayFeature: FeatureModel[] = featureState;

   if (arrayLevel.length === 1) {
      newArrayFeature = featureState.map((feature: FeatureModel, index: number) => {
         if (index > indexFined) {

            const currentLevelArray = feature.level.split(".");

            currentLevelArray[0] = increaseValue(currentLevelArray[0]);
            feature.level = joinValue(currentLevelArray)
         }
         return feature
      })
      newArrayFeature.splice(indexFined + 1, 0, { ...value, level: increaseValue(level) })
   }

   if (arrayLevel.length !== 1) {
      const lastLevel = Number(arrayLevel[arrayLevel.length - 1]) + 1;
      newArrayFeature.forEach((feature: FeatureModel, index: number) => {
         const currentLevelArray = feature.level.split(".");
         const isLevelWhoIncrease = currentLevelArray.length === arrayLevel.length &&
            currentLevelArray[0] === arrayLevel[0] &&
            indexFined < index;

         if (isLevelWhoIncrease) {
            const levelIncreased = currentLevelArray[currentLevelArray.length - 1]
            currentLevelArray[currentLevelArray.length - 1] = increaseValue(levelIncreased)
            feature.level = currentLevelArray.join(".")
         }
      })

      //? здесь можнл копировать ссылку '[...arrayLevel]"  что бы небыло изменения по старой ссылке !
      arrayLevel.pop()
      arrayLevel.push(String(lastLevel))
      newArrayFeature.splice(indexFined + 1, 0, { ...value, level: arrayLevel.join('.') })

   }
   const sorting = (a: FeatureModel, b: FeatureModel) => {
      const first: string[] = a.level.split(".");
      const second: string[] = b.level.split(".");
      for (let i = 0; i < first.length; i++) {
         if (second[i]) {
            if (first[i] !== second[i]) {
               return +first[i] - +second[i];
            }
         } else {
            return 1;
         }
      }
      return -1;
   }
   newArrayFeature.sort(sorting)

   return newArrayFeature
}

export const onAddFeatureChild = (featureState: FeatureModel[], valueChild: FeatureModel, level: string): FeatureModel[] => {
   const indexFined: number = featureState.findIndex((feature: FeatureModel) => {
      return feature.level === level
   })
   const filteredFeatureArray = featureState.filter((feature: FeatureModel) => {
      return feature.level === `${level}.1`
   })
   if (filteredFeatureArray.length === 0) {
      featureState.splice(indexFined + 1, 0, { ...valueChild, level: `${level}.1` })
   }
   if (filteredFeatureArray.length !== 0) {
      featureState.forEach((feature: FeatureModel, index) => {
         const currentFeatureLevelArray = feature.level.split(".");
         const mainLevelArray = level.split(".");
         const baseLevelCurrent = currentFeatureLevelArray.slice(0, mainLevelArray.length)
         const isLengthSame = currentFeatureLevelArray.length >= mainLevelArray.length;
         const baseLevelSome = level === baseLevelCurrent.join(".");
         const conditionLastFeatureLevel = isLengthSame && index > indexFined && baseLevelSome

         if (conditionLastFeatureLevel) {
            let lastFeatureLevel = currentFeatureLevelArray[currentFeatureLevelArray.length - 1];

            currentFeatureLevelArray[currentFeatureLevelArray.length - 1] = increaseValue(lastFeatureLevel);

            feature.level = currentFeatureLevelArray.join(".")
         }
      })
      featureState.splice(indexFined + 1, 0, { ...valueChild, level: `${level}.1` })
   }
   return featureState
}

export const onRemoveFeature = (featureState: FeatureModel[], level: string): FeatureModel[] => {
   const arrayLevel = level.split('.')
   const indexFined: number = featureState.findIndex((feature: FeatureModel) => {
      return feature.level === level
   })
   // let changeArrayFeature: FeatureModel[] = featureState;
   console.log(indexFined, 'indexFined')

   if (arrayLevel.length === 1) {

      const filteredFeatureArray = featureState.filter((feature: FeatureModel) => {
         const currentFeatureLevelArray = feature.level.split(".");
         const levelArray = level.split(".")
         return levelArray[0] === currentFeatureLevelArray[0]
      })

      featureState.forEach((feature: FeatureModel, index: number) => {

         if (index > indexFined) {

            const currentLevelArray = feature.level.split(".");
            currentLevelArray[0] = String(Number(currentLevelArray[0]) - 1)
            feature.level = currentLevelArray.join(".")
         }
      })
      featureState.splice(indexFined, filteredFeatureArray.length);
   }
   if (arrayLevel.length !== 1) {
      const filteredFeatureArray = featureState.filter((feature: FeatureModel) => {
         const currentFeatureLevelArray = feature.level.split(".");
         const levelArray = level.split(".")
         const expandArray = [...currentFeatureLevelArray]
         const splicedArray = expandArray.splice(0, levelArray.length)
         const splicedAndJoinedArray = splicedArray.join(".")
         const isLevelWhoRecalculateArray = levelArray.length < currentFeatureLevelArray.length &&
            splicedAndJoinedArray === level

         return isLevelWhoRecalculateArray
      })
      featureState.splice(indexFined, filteredFeatureArray.length + 1)
   }
   return featureState
}
