import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/Colors.js";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "black",
    padding: 24,
    marginTop: 44,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.accent500,
  },
  numberText: {
    color: "black",
    fontSize: 36,
    //fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
