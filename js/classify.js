$(".cen_left span").each(function(){
    $(this).click(function(){
        $(".cen_left span").find(".block").css({display: "none"});
        $(this).css({background:"#fff",color:"black"})
            .siblings().css({background:" #f5f5f5",color:"#717171"});
        $(this).find(".block").css({display:"block"});
    });
});
