$(".page-scroll").on("click", function (e) {
  // ambil isi href
  let href = $(this).attr("href");
  let Etujuan = $(href);

  // Tangkap element yang bersangkutan

  $("html, body").animate(
    {
      scrollTop: Etujuan.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );
  e.preventDefault();
});
