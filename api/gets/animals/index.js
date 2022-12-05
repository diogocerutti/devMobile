export const getAnimals = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await response.json();
    return json.message;
  } catch (error) {
    console.error(error);
  }
};
