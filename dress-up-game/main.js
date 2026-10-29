$(".dark-btn").click(
    function(){
        $(".container").toggleClass("dark");
        $(".box").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function(){
        $(".container, .box").toggleClass("spin");
    }
);

$(".meow-btn").click(
    function (){
        // $(".hachiware").addClass("meow");
        // $(".hachiware").css("display", "block");
        $(".hachiware").show();
        $(".meow-btn").hide();
    }
);

// $(".hachiware").draggable();

$(".draggable").draggable({
    containment: ".container",
    scroll: false,
    snap:true,
    grid: [48, 40],
    stack: ".draggable"
});
