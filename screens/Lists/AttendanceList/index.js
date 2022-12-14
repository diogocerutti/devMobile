import { useState } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { styles } from "./styles";

const List = [
  { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
  { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
  { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
  { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
  { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
];

const myKeyExtractor = (item) => {
  return item.id;
};

const renderItem = ({ item }) => {
  return (
    <View style={styles.box}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.boxContent}>
        <Text style={styles.title}>ATENDIMENTO</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, elit consectetur
        </Text>
      </View>
    </View>
  );
};

export function AttendanceList() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing((prevState) => !prevState);
  };

  return (
    <FlatList
      data={List}
      renderItem={renderItem}
      keyExtractor={myKeyExtractor}
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
}
