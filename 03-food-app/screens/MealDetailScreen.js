import { useRoute } from '@react-navigation/native'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetail from '../components/MealDetail'
import SubTitle from '../components/MealDetail/SubTitle'
import List from '../components/MealDetail/List'
import { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'
// import { useDispatch, useSelector } from 'react-redux'
import { FavoritesContext } from '../store/context/favorites-context'

const MealDetailScreen = ({ navigation }) => {
  const route = useRoute()
  const id = route.params.mealId
  // const dispatch = useDispatch()
  const selectedMeal = MEALS.find((meal) => meal.id === id)
  // const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

  const favoriteMealsCtx = useContext(FavoritesContext)

  const mealIsFavorite = favoriteMealsCtx.ids.includes(id)

  const headerButtonPressHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(id)
    } else {
      favoriteMealsCtx.addFavorite(id)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={headerButtonPressHandler}
          />
        )
      },
    })
  }, [navigation, headerButtonPressHandler])
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        style={{ color: 'white' }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />

          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8,
    color: 'white',
  },
  image: {
    width: '100%',
    height: 350,
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
})
