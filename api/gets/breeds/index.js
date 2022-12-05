export async function getBreeds() {
  const data = await fetch("http://localhost:3000/breeds");
  return data;
}
