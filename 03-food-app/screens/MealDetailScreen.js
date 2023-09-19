import { useRoute } from '@react-navigation/native'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetail from '../components/MealDetail'
import SubTitle from '../components/MealDetail/SubTitle'
import List from '../components/MealDetail/List'
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'

const MealDetailScreen = ({ navigation }) => {
  const route = useRoute()
  const id = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === id)

  const headerButtonPressHandler = () => {
    console.log('pressed')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
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
