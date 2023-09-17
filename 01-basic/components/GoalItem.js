import { StyleSheet, Text, View, Pressable } from 'react-native'

const GoalItem = ({ text, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem}
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
})
