const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");


form.addEventListener('submit', (event) => {
  event.preventDefault();
  calculateImc();
});

function calculateImc() {
  const length = input[0].value;
  const weight = input[1].value;

  if (!length || !weight || length <= 0 || weight <= 0) {
    console.error("Impossible de calculer")
    displayBMI.textContent = "Impossible de calculer";
    result.textContent = "Veuillez entrer des bonnes valeurs de taille ou de poids !";
    return;
  }

  const IMC = (weight / Math.pow(length / 100, 2)).toFixed(1);
  console.log(IMC);

  showResult(IMC);
}

function showResult(BMI) {
  const rank = BMIData.find(data => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });

  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`;
  result.textContent = `Résultat : ${rank.name}`;
}

// IMC = poids en kg / taille² en m
