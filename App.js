import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prev) => [...prev, enteredGoalText]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prev) => prev.filter((item) => item.id !== id));
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="red" onPress={startAddGoalHandler} />
        <GoalInput addGoalHandler={addGoalHandler} isOpen={modalIsVisible} endAddGoalHandler={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem id={itemData.item.id} text={itemData.item.text} deleteGoalHandler={deleteGoalHandler} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
