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
        window.location.replace(
          window.location.origin + "/jquary-project/sub_pages/product.html"
        );
      })
      .fail(function (error) {
        console.error(error.responseJSON.message);
      });
    $(".wrapper").hide();
  });
});
