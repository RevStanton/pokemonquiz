document.getElementById("quiz").innerHTML = `
  <p>1. At a party, you’re most likely...</p>
  <label><input type="radio" name="q1" value="E"> Mingling with everyone</label><br>
  <label><input type="radio" name="q1" value="I"> Hanging with a small group</label>
`;

document.getElementById("submit").addEventListener("click", () => {
  const answer = document.querySelector('input[name="q1"]:checked');
  if (!answer) {
    alert("Please answer the question!");
    return;
  }

  document.getElementById("result").innerHTML =
    answer.value === "E" ? "You might be a Pikachu!" : "You might be a Snorlax!";
});
