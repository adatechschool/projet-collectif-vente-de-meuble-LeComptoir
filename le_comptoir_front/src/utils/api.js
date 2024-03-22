export async function getMeubles() {
  //sert à update la valeur de data
  const res = await fetch("http://localhost:3000/meubles");
  const meubles = await res.json();
  return meubles;
}
