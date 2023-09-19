import { useLayoutEffect } from 'react'
import MealItem from '../components/MealItem'
import { MEALS, CATEGORIES } from '../data/dummy-data'

import { View, StyleSheet, FlatList } from 'react-native'

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0
  })

  const renderMealItem = (itemData) => {
    return <MealItem meal={itemData.item} />
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title
    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
