document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Define MBTI dichotomies scores
  let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // Loop through all 12 questions
  for (let i = 1; i <= 12; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);

    if (!answer) {
      alert("Please answer all questions before submitting!");
      return; // Stop submission if any question is unanswered
    }

    scores[answer.value]++;
  }

  // Determine MBTI type (highest score in each pair)
  const type = 
    (scores.E >= scores.I ? "E" : "I") +
    (scores.S >= scores.N ? "S" : "N") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P");

  console.log("Your MBTI type is:", type);

  // Save result to localStorage (for "Your Result" link in nav)
  localStorage.setItem("pokemonResult", type.toLowerCase());

  // Redirect to the correct results page
  const resultsPage = `results/${type.toLowerCase()}.html`;
  window.location.href = resultsPage;
});
