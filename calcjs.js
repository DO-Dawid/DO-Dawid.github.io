// Pobieramy element span, w którym będzie wyświetlony wynik
const resultElement = document.getElementById('result');

// Ustawiamy początkową wartość wyniku na 40000zł
let result = 40000;

// Obiekt z informacją, czy dany dodatek został już wybrany
const addons = {
  aircon: false,
  furniture: false,
  solar: false,
}

// Funkcja do aktualizacji wyniku
function calculatePrice(checkbox, additionalCost) {
  // Sprawdzamy, który dodatek został wybrany
  const selectedAddon = checkbox.value;

  // Sprawdzamy, czy wybrany dodatek został już dodany
  if (checkbox.checked && !addons[selectedAddon]) {
    // Jeśli nie, dodajemy koszt dodatku do całkowitej ceny i oznaczamy dodatek jako wybrany
    result += additionalCost;
    addons[selectedAddon] = true;
  } else if (!checkbox.checked && addons[selectedAddon]) {
    // Jeśli tak, usuwamy koszt dodatku z całkowitej ceny i oznaczamy dodatek jako nie wybrany
    result -= additionalCost;
    addons[selectedAddon] = false;
  }

  // Wyświetlamy wynik w elemencie span
  resultElement.textContent = `${result}zł`;
}

