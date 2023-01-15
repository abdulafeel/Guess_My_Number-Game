import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructiontext, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructiontext: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
