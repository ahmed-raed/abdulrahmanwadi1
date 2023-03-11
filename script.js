$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})

    })

        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

        var typed=new Typed (".typing", {
            strings: ["مبرمج وتقني", "صانع محتوى", "منتج ومخرج"],
            typeSpeed: 110,
            backSpeed: 80,
            loop: true
        });

        var typed=new Typed (".bf", {
            strings: ["انا اسمي عبدالرحمن وادي، عمري ١٧ سنة، صانع محتوى في البرمجة والتقنية، أحب الإعلام وصناعة المحتوى، هدفي أوصل للشباب فكرة ولو عامة عن البرمجة بأسلوب سهل ومبسط ."],
            typeSpeed: 110,
            backSpeed: 80,
            loop: false
        });
});
