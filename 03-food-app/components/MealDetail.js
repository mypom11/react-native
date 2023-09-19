import { View, Text, StyleSheet } from 'react-native'

const MealDetail = ({ duration, complexity, affordability, style }) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, style]}>{duration}min</Text>
      <Text style={[styles.detailItem, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, style]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  )
}

export default MealDetail

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})
