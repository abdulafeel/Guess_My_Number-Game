import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors.js";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 36,
    backgroundColor: "#f6efbd",
    elevation: 4,
  },
});
export default Card;
