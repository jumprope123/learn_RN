import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View, Image } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText({ text: enteredText, id: Math.random().toString() });
  }

  function addGoal() {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }

  function closeGoal() {
    props.endAddGoalHandler();
  }

  return (
    <Modal visible={props.isOpen} animationType="slide">
      <View style={styles.InputContainer}>
        <Image source={require("../assets/images/icon_book.png")} style={styles.image} />
        <TextInput placeholder="Your course goal!!" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText.text} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeGoal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
