//Animasi muncul dari kiri dan kanan
$(window).on("load", function () {
    $(".animasi-kiri").addClass("muncul");
    $(".animasi-kanan").addClass("muncul");
    $(".animasi-atas-bawah").addClass("muncul");
    $(".animasi-bawah-atas").addClass("muncul");
});

// Parallax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Animasi navigation bar
    if(wScroll > 0) {
        $(".navbar").addClass("scroll");
    } else if (wScroll == 0) {
        $(".navbar").removeClass("scroll");
    }

    // Mengecek apakah ada class tersebut
    if ($('.animasi-atas-bawah-per-item').length) {
        //animasi atas bawah per item
        if (wScroll > $(".animasi-atas-bawah-per-item").offset().top - 400) {
            $(".animasi-atas-bawah-per-item").each(function (i) {
                setTimeout(function () {
                $(".animasi-atas-bawah-per-item").eq(i).addClass("muncul");
              }, 300 * (i + 1));
            });
        }
    }

    // Mengecek apakah ada class tersebut
    if ($(".animasi-atas-bawah-keseluruhan-scroll-reasons").length) {
        if (wScroll > $(".animasi-atas-bawah-keseluruhan-scroll-reasons").offset().top - 400) {
            // animasi why choose us dari atas ke bawah secara keseluruhan
            $(".animasi-atas-bawah-keseluruhan-scroll-reasons").addClass("muncul");
        }
    }

    // Mengecek apakah ada class tersebut
    if ($(".animasi-atas-bawah-keseluruhan-scroll-clients").length) {
        if (wScroll > $(".animasi-atas-bawah-keseluruhan-scroll-clients").offset().top - 400) {
            // animasi our valuable client dari atas ke bawah secara keseluruhan
            $(".animasi-atas-bawah-keseluruhan-scroll-clients").addClass("muncul");
        }
    }
});
