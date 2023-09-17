import { View, TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText)
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay!', style: 'destructive', onPress: resetInputHandler }]
      )
      return
    }

    onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  button: {
    flex: 1,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
  },
})
