

// window.onscroll = function() {stickyMenu()};
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter++
    if (counter>4){
        counter = 1;
    }
}, 8500)
function change(x){
    x.classList.add('checked')
}
function extendMenu(x,y){
    x.classList.toggle("change");
    y.classList.toggle("change");
}

// Pobierz formularz i przypisz mu zdarzenie submit
var form = document.getElementById("kontakt-form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Zatrzymaj domyślne zachowanie formularza

  // Pobierz wartości pól formularza
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var phone = document.getElementById("phone").value;

  // Utwórz obiekt FormData i dodaj wartości pól formularza
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("phone", phone);

  // Utwórz nowe żądanie AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "adres_hosta/funkcja_email", true); // Zmień "adres_hosta/funkcja_email" na odpowiedni adres URL funkcji email na Twoim hoście

  // Ustaw nagłówki żądania, jeśli są wymagane
  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

  // Zarejestruj funkcję obsługującą odpowiedź z serwera
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Sukces: obsłuż odpowiedź z serwera po pomyślnym przesłaniu e-maila
        console.log("E-mail został wysłany!");

        var successPopup = document.createElement("div");
        successPopup.className = "popup success";
        successPopup.textContent = "Wiadomość została wysłana.";

        document.body.appendChild(successPopup);

        setTimeout(function() {
          document.body.removeChild(successPopup);
        }, 3000);

        form.reset();
      } else {
        // Błąd: obsłuż błąd odpowiedzi z serwera
        console.error("Wystąpił błąd podczas wysyłania e-maila.");
        var errorPopup = document.createElement("div");
        errorPopup.className = "popup error";
        errorPopup.textContent = "Wiadomość została wysłana.";

        document.body.appendChild(errorPopup);

        setTimeout(function() {
          document.body.removeChild(errorPopup);
        }, 3000);
      }
    }
  };


  xhr.send(formData);
});
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

  // Pobierz formularz i przypisz mu zdarzenie submit
var form = document.getElementById("kontakt-form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Zatrzymaj domyślne zachowanie formularza

  // Pobierz wartości pól formularza
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var phone = document.getElementById("phone").value;

  // Utwórz obiekt FormData i dodaj wartości pól formularza
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("phone", phone);

  // Utwórz nowe żądanie AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "adres_hosta/funkcja_email", true); // Zmień "adres_hosta/funkcja_email" na odpowiedni adres URL funkcji email na Twoim hoście

  // Ustaw nagłówki żądania, jeśli są wymagane
  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

  // Zarejestruj funkcję obsługującą odpowiedź z serwera
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Sukces: obsłuż odpowiedź z serwera po pomyślnym przesłaniu e-maila
        console.log("E-mail został wysłany!");
        // Tutaj możesz dodać kod obsługujący sukces (np. wyświetlenie potwierdzenia)
      } else {
        // Błąd: obsłuż błąd odpowiedzi z serwera
        console.error("Wystąpił błąd podczas wysyłania e-maila.");
        // Tutaj możesz dodać kod obsługujący błąd (np. wyświetlenie komunikatu o błędzie)
      }
    }
  };

  // Wyślij żądanie AJAX z danymi formularza
  xhr.send(formData);
});






