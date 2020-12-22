// COUNTER ANIMATION

let nCount = selector => {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value));

            }
        });
    });
};

let a = 0;

$(window).scroll(function () {
    let oTop = $(".Count").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect > h3")
    }
});

// TYPING ANIMATION SCRIPT
var typed = new Typed(".typing", {
    strings: ["Easier Deployment", "Cloud", "Hosting", "Ox"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});


var typed = new Typed(".typing_2", {
    strings: ["Cloud Hosting Ox"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});