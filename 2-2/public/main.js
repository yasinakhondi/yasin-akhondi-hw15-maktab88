let button = document.querySelector("button");
$("button").click(function () {
  console.log(1);
  $.ajax({
    type: "get",
    url: "http://localhost:9000/login",
    success() {
      //   console.log(data);
      //   products = data;
      //   data = JSON.stringify(data);
      //   $("#dataViewer").html(data);
    },
    error(err) {
      console.log(err);
    },
    async: false,
  });
});
