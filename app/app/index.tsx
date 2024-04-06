import React from "react";
import { FlatList, StyleSheet, View, SafeAreaView } from "react-native";
import { Text } from "@/components/Themed";
import CardItem from "@/components/CardItem";
import { useNavigation } from "@react-navigation/native";

interface CardData {
  id: number;
  text: string;
}

export default function TabOneScreen() {
  const navigation = useNavigation();

  // Hide the heading index and back arrow
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const data: CardData[] = [
    { id: 1, text: "Caretaker" },
    { id: 2, text: "Equipment" },
    { id: 3, text: "Livestock" },
    { id: 4, text: "Market" },
    { id: 5, text: "Alerts" },
    { id: 6, text: "Log Out" },
  ];

  const renderCardItem = ({ item }: { item: CardData }) => {
    return (
      <CardItem text={item.text} onPress={() => handleCardPress(item.id)} />
    );
  };

  const handleCardPress = (id: number) => {
    //  card press here
    console.log(`Card ${id} pressed`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Farm Guardian services</Text>
      </View>
      <View style={styles.space} />
      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={renderCardItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  space: {
    height: 110,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    paddingTop: 80,
  },
});
