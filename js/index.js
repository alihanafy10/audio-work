let windowWidth;
const mediaQuery = window.matchMedia("(max-width: 768px)");
$(window).resize(function () {
  windowWidth = $(this).width();
  //nav
  if (windowWidth <= 768) {
    $("nav ul li").removeClass("me-2");
    $("nav ul li a p").addClass("d-none");
  } else {
    $("nav ul li").addClass("me-2");
    $("nav ul li a p").removeClass("d-none");
  }
  
});
 if (mediaQuery.matches) {
   $("nav ul li").removeClass("me-2");
   $("nav ul li a p").addClass("d-none");
 } else {
   $("nav ul li").addClass("me-2");
   $("nav ul li a p").removeClass("d-none");
 }
//news
let news = ["الحرب على غزة #", "اعتزال الاسطورة ميسي", "مباراة الاهلى اليوم"];
let pin = 0;
let timerId;

$(window).resize(function () {
  if ($(this).width() <= 768) {
    $("#btnUp").removeClass("d-none");
    $("#btnDown").removeClass("d-none");
    $("#dataNews").removeClass("d-none");
    minResize();
  } else {
    maxResize();
  }
});

function minResize() {
  $("#mark").addClass("d-none");

  clearInterval(timerId); // إيقاف المؤقت  (لو كان شغال)

  interval();

  $("#btnUp").on("click", function () {
    pin = (pin + 1) % news.length;
    console.log(pin);
    $("#dataNews").html(news[pin]);
  });
  $("#btnDown").on("click", function () {
    let x = pin - 1;
    pin = (x + news.length) % news.length;
    console.log(pin);
    $("#dataNews").html(news[pin]);
  });
}

function maxResize() {
  $("#btnUp").addClass("d-none");
  $("#btnDown").addClass("d-none");
  $("#dataNews").addClass("d-none");
  $("#mark").removeClass("d-none");
}

if (mediaQuery.matches) {
  minResize();
} else {
  maxResize();
}

function interval() {
  timerId = setInterval(function () {
    if (pin < news.length) {
      $("#dataNews").html(news[pin]);
      pin++;
    } else {
      pin = 0;
    }
  }, 2000);
}


//rels
$(".slick-rels").slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  speed: 100,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  cssEase: "linear",
  rtl: true,
});









