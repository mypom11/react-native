import { useState } from 'react'
import { TextInput, View, Button, StyleSheet, Modal, Image } from 'react-native'
import GoalImage from '../assets/images/goal.png'

const GoalInput = ({ onAddGoal, isVisible, onCloseModal }) => {
  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoal)
    onCloseModal()
    setEnteredGoal('')
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={GoalImage} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 16,
    backgroundColor: '#311b6b',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
})
