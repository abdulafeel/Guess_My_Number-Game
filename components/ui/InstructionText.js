import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors.js";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructiontext, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructiontext: {
    fontFamily: "open-sans",
    color: "black",
    fontSize: 24,
  },
});

export default InstructionText;
