//Avain localStorageen – tällä nimellä tallennetaan ja haetaan tuotteet selaimen muistista
const STORAGE_KEY = 'joululista-v1';

//Tuotteiden lista (ladataan alussa localStoragesta)
let items = loadItems();

//Chart.js-kaavion muuttuja (luodaan myöhemmin)
let chart;

//Sovellus käynnistyy: näytetään tallennetut tuotteet
renderItems();

//Lomakkeen lähetys – uuden tuotteen lisääminen
$('#item-form').on('submit', function(e) {
  e.preventDefault(); // Estetään sivun uudelleenlataus

  const text = $('#item-input').val().trim(); // Haetaan syötekentän arvo

  //Jos syöte on liian lyhyt, näytetään virhe ja käytetään shake-efektiä
  if (text.length < 3) {
    showError('Tuotteen nimi on liian lyhyt.');
    $('#item-input').effect('shake'); // jQuery UI -efekti
    return;
  }

  //Luodaan uusi tuote-objekti
  const item = {
    id: Date.now().toString(), // Uniikki ID aikaleimasta
    text,                      // Tuotteen nimi
    done: false                // Aluksi ei ostettu
  };

  items.push(item);     // Lisätään listaan
  saveItems();          // Tallennetaan selaimen muistiin
  appendItem(item);     // Näytetään listassa
  updateCounter();      // Päivitetään laskuri ja kaavio

  //Tyhjennetään kenttä ja virheviesti
  $('#item-input').val('').removeClass('invalid');
  $('#error-message').text('');
});

//Näytetään virheviesti ja merkitään kenttä virheelliseksi
function showError(msg) {
  $('#error-message').text(msg);
  $('#item-input').addClass('invalid');
}

//Haetaan tallennetut tuotteet localStoragesta
function loadItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

//Tallennetaan tuotteet localStorageen
function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

//Näytetään kaikki tuotteet listassa
function renderItems() {
  $('#item-list').empty();        // Tyhjennetään lista
  items.forEach(appendItem);      // Lisätään jokainen tuote
  updateCounter();                // Päivitetään laskuri ja kaavio
}

//Lisätään yksi tuote listaan DOMiin
function appendItem(item) {
  //Luodaan listaelementti ja lisätään fadeIn-animaatio (Animate.css)
  const $li = $('<li>')
    .attr('data-id', item.id)
    .addClass('animate__animated animate__fadeIn');

  //Jos tuote on jo merkitty tehdyksi, lisätään completed-luokka
  if (item.done) $li.addClass('completed');

  //Checkbox tuotteen tilan vaihtamiseen
  const $checkbox = $('<input type="checkbox">')
    .prop('checked', item.done)
    .on('change', () => toggleDone(item.id, $checkbox.prop('checked')));

  //Tuotteen nimi
  const $span = $('<span>').addClass('text').text(item.text);

  //Poista-nappi
  const $del = $('<button>')
    .addClass('delete')
    .attr('type', 'button')
    .text('Poista')
    .on('click', () => removeItem(item.id));

  //Kootaan elementti ja lisätään listaan
  $li.append($checkbox, $span, $del);
  $('#item-list').append($li);

  //jQuery UI highlight-efekti (kultainen välähdys)
  $li.effect('highlight', { color: '#ffecb3' }, 800);
}

//Vaihdetaan tuotteen tila (ostettu ↔ ostamatta)
function toggleDone(id, done) {
  const item = items.find(x => x.id === id);
  if (!item) return;

  item.done = done;     // Päivitetään tila
  saveItems();          // Tallennetaan muutos

  //Päivitetään ulkoasu ja lisätään pulse-animaatio (Animate.css)
  $(`li[data-id="${id}"]`).toggleClass('completed', done);
  $(`li[data-id="${id}"] .text`).addClass('animate__animated animate__pulse');

  updateCounter();      // Päivitetään laskuri ja kaavio
}

//Poistetaan tuote listasta ja DOMista
function removeItem(id) {
  items = items.filter(x => x.id !== id); // Poistetaan listasta
  saveItems();                            // Tallennetaan muutos

  const $li = $(`li[data-id="${id}"]`);

  //jQuery UI drop-efekti ennen poistamista
  $li.hide('drop', { direction: 'left' }, 500, () => $li.remove());

  updateCounter(); // Päivitetään laskuri ja kaavio
}

//Päivitetään ostamattomien määrä ja kaavio
function updateCounter() {
  const count = items.filter(x => !x.done).length; // Ostamatta
  const bought = items.filter(x => x.done).length; // Ostettu

  $('#counter').text(`Ostamatta: ${count}`);

  //Jos kaaviota ei ole vielä luotu, luodaan se
  if (!chart) {
    chart = new Chart($('#statsChart'), {
      type: 'doughnut',
      data: {
        labels: ['Ostamatta', 'Ostettu'],
        datasets: [{
          data: [count, bought],
          backgroundColor: ['#00c853', '#d32f2f'] // vihreä ja punainen
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  } else {
    //Päivitetään kaavion data
    chart.data.datasets[0].data = [count, bought];
    chart.update();
  }
}
