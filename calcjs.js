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
function updatePrice() {
  var houseType = parseInt(document.getElementById("houseType").value);
  var airConditioning = document.getElementById("airConditioning").checked;
  var biggerWindows = document.getElementById("biggerWindows").checked;
  var terrace = document.getElementById("terrace").checked;
  var totalPrice = houseType;

  if (airConditioning) {
    totalPrice += 10000;
  }
  if (biggerWindows) {
    totalPrice += 5000;
  }
  if (terrace) {
    totalPrice += 20000;
  }

  document.getElementById("totalPrice").value = totalPrice.toLocaleString();
}

function submitForm() {
  var form = document.getElementById("quotationForm");
  // Dodać logikę do wysłania formularza (np. AJAX request)
  // Tutaj można użyć biblioteki, takiej jak axios lub fetch, aby wysłać formularz na serwer.
  // Przykład użycia zapytania fetch:
  /*
  fetch("url_do_endpointu", {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => {
    // Obsługa odpowiedzi od serwera
  })
  .catch(error => {
    // Obsługa błędu
  });
  */
}

