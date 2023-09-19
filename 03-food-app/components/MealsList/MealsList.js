import MealItem from '../MealItem'

import { View, StyleSheet, FlatList } from 'react-native'

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    return <MealItem meal={itemData.item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  )
}

export default MealsList
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
