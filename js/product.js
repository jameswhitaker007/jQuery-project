$(document).ready(function () {
  var token = localStorage.getItem("token");
  if (token == undefined || token == "") {
    window.location.replace(window.location.origin + '/jQuery-project/index.html');
  }

  $("#user").text("Hi,\n" + localStorage.getItem("name"));

  $.ajax({
    type: "GET",
    url: "https://dummyjson.com/auth/products",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    success: function (data) {
      console.log(data);
      appendProductCards(data.products);
      $(".wrapper").hide();
    },
    error: function (error) {
      console.error(error);
      if (error.status === 403) {
        var messageObj = JSON.parse(error.responseText);
        alert(messageObj.message);
        window.location.replace(window.location.origin + '/jQuery-project/index.html');
      }
      $(".wrapper").hide();
    },
    dataType: "json",
  });

  const toastLiveExample = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();

  $("#log-out").click(logout);
});

function appendProductCards(products) {
  $.each(products, function (index, obj) {
    $("#product").append(`<div class="col-md-6 col-lg-4 gy-3">
    <div class="card h-100" >
      <div class="d-flex p-3">
        <p class="lead">${obj.title}</p>
      </div>
      <img src="${obj.images[0]}" alt="${obj.title}" class="img-responsive"/>
      <div class="card-body">
        <p class="small">
          <a href="#" class="text-muted">${obj.category}</a>
        </p>
        <div class="d-flex justify-content-between">
        <h5>${obj.brand}</h5>
        <h5 class="text-danger">$${obj.price}.00</h5>
      </div>
        <div class="d-flex justify-content-between">
          <p class="text-muted">Rating :</p>
          <div class="ms-auto text-warning">
            ${addStars(obj.rating)}
          </div>
        </div>
      </div>
    </div>
  </div>`);
  });
}

function addStars(stars) {
  var fullStars = Math.floor(stars);
  var decimalValue = stars.toString().indexOf(".");
  var halfStar = stars.toString().substring(decimalValue + 1) >= 50 ? 1 : 0;
  var emptyStars = 5 - fullStars - halfStar;
  var result = "";
  if (fullStars > 0) {
    for (i = 0; i < fullStars; i++) {
      result += '<i class="fa-solid fa-star"></i>';
    }
  }
  if (halfStar == 1) {
    result += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  if (emptyStars > 0) {
    for (j = 0; j < emptyStars; j++) {
      result += '<i class="fa-regular fa-star"></i>';
    }
  }
  return result;
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  window.location.replace(window.location.origin + '/jQuery-project/index.html');
}
