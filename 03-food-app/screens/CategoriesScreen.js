import { FlatList, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {
  const numColumns = 2

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      })
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <View>
      <FlatList
        key={numColumns}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={numColumns}
      />
    </View>
  )
}

export default CategoriesScreen
