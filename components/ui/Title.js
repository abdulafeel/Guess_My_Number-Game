import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  titleView: {
    borderWidth: 5,
    borderColor: "black",
    padding: 12,
    borderRadius: 18,
    backgroundColor: "black",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    //fontWeight: "bold",
    textAlign: "center",
    color: "#f6efbd",
  },
});
