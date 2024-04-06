import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = (width - 50) / 2;
const marginHorizontal = 5; // 0.5 cm margin
const gap = 38; // 3.8 cm gap

interface CardItemProps {
  text: string;
  onPress: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        { width: cardWidth, marginHorizontal, marginBottom: gap },
      ]}
    >
      <View>
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CardItem;
