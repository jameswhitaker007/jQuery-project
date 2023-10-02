//var fields = ["username", "password"];
/*function loginApi(e) {
  e.preventDefault();
  console.log(e);
  $(".wrapper").show();
  var loginForm = $(".loginForm")[0];
  console.log(loginForm);
  //fields.forEach((field) => validateFields(field));
  if (loginForm.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
    $(".wrapper").hide();
    return;
  }

  console.log($("#username").val());

  $.post("https://dummyjson.com/auth/login", {
    username: $("#username").val(),
    password: $("#password").val(),
  })
    .done(function (data) {
      console.log(data);
      localStorage.setItem("token", data.token);
      window.location.replace("./subpages/product.html");
    })
    .fail(function (data) {
      console.error(data);
    })
    .always(function () {
      console.log("Finished");
    });

  $(".wrapper").hide();
}*/

/*function validateFields(field) {
  var tempEle = $("#" + field);
  console.log(tempEle);
  if (tempEle.val() == "") {
    tempEle.removeClass("is-valid").addClass("is-invalid");
  } else {
    tempEle.removeClass("is-invalid").addClass("is-valid");
  }
}*/

/*$("document").ready(function () {
  $("#submitBtn").click(loginApi);
});*/

//window.history.pushState("./index.html");

/*(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  console.log(forms);

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    console.log(form);
    form.addEventListener(
      "submit",
      function (event) {
        $(".wrapper").show();
        if (!form.checkValidity()) {
          console.log("error");
          event.preventDefault();
          event.stopPropagation();
          $(".wrapper").hide();
          return;
        }
        form.classList.add("was-validated");
        event.preventDefault();
        $.post("https://dummyjson.com/auth/login", {
          username: $("#username").val(),
          password: $("#password").val(),
        })
          .done(function (data) {
            localStorage.setItem("token", data.token);

            window.location.replace("./subpages/product.html");
          })
          .fail(function (data) {
            console.error(data);
          })
          .always(function () {
            console.log("Finished");
          });

        $(".wrapper").hide();
      },
      false
    );
  });
})();*/

/*$("document").ready(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  //console.log(forms);

  var newForm = $('#form');
  console.log(newForm);
  newForm[0].addEventListener('submit', function() {
    console.log('hi');
  })

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    //console.log(form);
    form.addEventListener(
      "submit",
      function (event) {
        $(".wrapper").show();
        if (!form.checkValidity()) {
          console.log("error");
          event.preventDefault();
          event.stopPropagation();
          $(".wrapper").hide();
          return;
        }
        form.classList.add("was-validated");
        event.preventDefault();
        $.post("https://dummyjson.com/auth/login", {
          username: $("#username").val(),
          password: $("#password").val(),
        })
          .done(function (data) {
            localStorage.setItem("token", data.token);

            window.location.replace("./subpages/product.html");
          })
          .fail(function (data) {
            console.error(data);
          })
          .always(function () {
            console.log("Finished");
          });

        $(".wrapper").hide();
      },
      false
    );
  });
});*/

$("document").ready(function () {
  $("#form")[0].addEventListener("submit", function (event) {
    event.preventDefault();
    $(".wrapper").show();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      event.stopPropagation();
      $(".wrapper").hide();
      return;
    }
    $.post("https://dummyjson.com/auth/login", {
      username: $("#username").val(),
      password: $("#password").val(),
    })
      .done(function (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.firstName + " " + data.lastName);
        console.log(data);
        //window.location.replace("./sub_pages/product.html");
        window.location.replace(window.location.origin + "./sub_pages/product.html");
      })
      .fail(function (error) {
        console.error(error.responseJSON.message);
      });
    $(".wrapper").hide();
  });
});
