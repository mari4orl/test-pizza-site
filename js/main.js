$(document).ready(function () {
  $("#form").on("submit", function (event) {
    event.preventDefault();

    const data = {
      name: $("#name").val(),
      phone: $("#phone").val(),
      address: $("#address").val()
    };

    $.ajax({
      url: "#",
      type: "post",
      data: data,
      success: function (response) {
        alert("Спасибо за заказ!");
      },
      error: function (response) {
        alert("Спасибо за заказ!");
      },
    });
  });
});

let navigation = document.querySelector('.navigation__list');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('change', function() {
  if (this.checked) {
     navigation.classList.add('navigation__list--opened');
     document.body.classList.add('stop-scrolling');
  } else {
    navigation.classList.remove('navigation__list--opened');
    document.body.classList.remove('stop-scrolling');
  }
});
