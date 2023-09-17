import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }
  const endGoalHandler = () => {
    setModalIsVisible(false)
  }
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((prevState) => [
      ...prevState,
      { text: enteredGoal, id: Math.random().toString() },
    ])
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCloseModal={endGoalHandler}
          isVisible={modalIsVisible}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={() => deleteGoalHandler(itemData.item.id)}
                />
              )
            }}
            keyExtractor={(item) => {
              return item.id
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
  },
})
