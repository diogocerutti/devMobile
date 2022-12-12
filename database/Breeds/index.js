import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveBreed(breed) {
  let savedBreeds = [];
  const response = await AsyncStorage.getItem("breeds");

  if (response) {
    savedBreeds = JSON.parse(response);
  }
  savedBreeds.push(breed);

  return AsyncStorage.setItem("breeds", JSON.stringify(savedBreeds));
}

async function getBreeds() {
  const response = await AsyncStorage.getItem("breeds");
  if (response) return Promise.resolve(JSON.parse(response));
  else return Promise.resolve([]);
}

module.exports = {
  saveBreed,
  getBreeds,
};
