function PokemonMaster(A, B) {
  return A >= B ? 1 : 0;
}

document.getElementById("checkBtn").addEventListener("click", function () {
  const A = parseInt(document.getElementById("pokeballs").value);
  const B = parseInt(document.getElementById("pokemons").value);

  const result = PokemonMaster(A, B);
  const resultElement = document.getElementById("result");

  if (isNaN(A) || isNaN(B)) {
    resultElement.textContent = "⚠️ Please enter valid numbers!";
    resultElement.style.color = "red";
  } else if (result === 1) {
    resultElement.textContent = "✅ Sara can catch all the Pokémon!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "❌ Sara cannot catch all the Pokémon!";
    resultElement.style.color = "red";
  }
});
