const base_api = "https://api.genderize.io";

function showResult(name, gender, probability) {
  const predictionElement = document.getElementById("prediction");
  const probabilityPercentage = probability * 100;
  const predictionText = `Hello ${name}, your gender is likely ${gender} By ${probabilityPercentage}%`;

  predictionElement.textContent = predictionText;
}

async function predict(event) {
  if (event.key === "Enter") {
    const firstName = event.target.value;
    const queryUrl = `${base_api}/?name=${firstName}`;
    const response = await fetch(queryUrl);
    const result = await response.json();
    showResult(result.name, result.gender, result.probability);
  }
}
