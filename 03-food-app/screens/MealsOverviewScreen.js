import { useLayoutEffect } from 'react'
import MealItem from '../components/MealItem'
import { MEALS, CATEGORIES } from '../data/dummy-data'

import { StyleSheet } from 'react-native'
import MealsList from '../components/MealsList/MealsList'

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0
  })
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title
    navigation.setOptions({
      title: categoryTitle,
    })
  }, [navigation])

  return <MealsList items={displayMeals} />
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
