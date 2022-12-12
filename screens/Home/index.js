import { useState } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { styles } from "./styles";

const MarvelList = [
  {
    id: 1,
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  },
  {
    id: 2,
    image:
      "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
  },
  {
    id: 3,
    image:
      "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-10/dog-583007.jpg?h=c6dbd090&itok=uY9_vnXo",
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  },
  {
    id: 5,
    image:
      "https://quantocustaviajar.com/blog/wp-content/uploads/2022/03/cat-scaled.jpg",
  },
];

const myKeyExtractor = (item) => {
  return item.id;
};

const renderItem = ({ item }) => {
  return (
    <View style={styles.box}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.boxContent}>
        <Text style={styles.title}>Nome do animal</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, elit consectetur
        </Text>
        <Text style={styles.value}>R${Math.floor(Math.random() * 101)}</Text>
      </View>
    </View>
  );
};

export function Home() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing((prevState) => !prevState);
  };

  return (
    <FlatList
      data={MarvelList}
      renderItem={renderItem}
      keyExtractor={myKeyExtractor}
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
}
