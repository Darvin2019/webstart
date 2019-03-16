$(document).ready(function(){
  $('#brif-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone:"required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: "Заполните поле",
      phone: "Заполните поле",
      email: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });
  $('#offer-form').validate({
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: "Заполните поле",
      phone: {
        required: "Заполните поле"
      }
    }
  });
})