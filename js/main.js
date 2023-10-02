const alertPlaceholder = $("#alert-placeholder");

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
        alertPlaceholder.empty();
        alert("Authentication successful", "success");
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.firstName + " " + data.lastName);
        console.log(data);
        window.location.replace(
          window.location.origin + "/jQuery-project/sub_pages/product.html"
        );
      })
      .fail(function (error) {
        console.error(error.responseJSON.message);
        alertPlaceholder.empty();
        alert("Authentication failed", "warning");
      });
    $(".wrapper").hide();
  });
});

function alert(message, type) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
}
