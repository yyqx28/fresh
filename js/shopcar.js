// 加单个商品数量
    $(".jia").click(function(){
        var s = $(this).parent().find(".g_sum");
        s.html(parseInt(s.html())+1);
    });

// 减少单个商品数量
    $(".jian").click(function(){
        var s = $(this).parent().find(".g_sum");
        if(s.html()<=1){
            s.html(1);
        }else{
            s.html(parseInt(s.html())-1);
        }
    });

// 选中全选按钮
    $(".give .nosel").click(function(){
        var isShow = $(this).find("i").is(":visible");
        var isHide = $(this).find("i").is(":hidden");
        if(isShow==true){
            $(this).find("i").hide();
            allnosel();
        }else if(isHide==true){
            $(this).find("i").show();
            allsel();
        }
    });

    $(".selall .nosel").click(function(){
        var isShow = $(this).find("i").is(":visible");
        var isHide = $(this).find("i").is(":hidden");
        if(isShow==true){
            $(this).find("i").hide();
            allnosel();
        }else if(isHide==true){
            $(this).find("i").show();
            allsel();
        }
    });

// 选中单个按钮
    $(".sumleft .nosel").click(function() {
        var isShow = $(this).find("i").is(":visible");
        var isHide = $(this).find("i").is(":hidden");
        if (isShow == true) {
            $(this).find("i").hide();
            $(".give .nosel").find("i").hide();
            $(".selall .nosel").find("i").hide();
        }else if(isHide == true){
            $(this).find("i").show();
        }
   });
// 当所有商品都被选中时，全选按钮也被选中
    $(".goods_sum").each(function(){
        var isShow = $(this).find(".sumleft .nosel i").is(":visible");
        var isHide = $(this).find(".sumleft .nosel i").is(":hidden");
        if(isHide){
            $(this).parent().find(".give i").hide();
        }else{
            // $(this).parent().find(".give i").show();
            allsel();
        }
    });
    // 所有商品全部不被选中
    function allnosel(){
        $(".goods_sum").each(function(){
            $(this).find(".sumleft i").hide();
        }) ;
        $(".selall .nosel").find("i").hide();
        $(".give .nosel").find("i").hide();
    }

    // 所有商品全部被选中
    function allsel(){
        $(".goods_sum").each(function(){
            $(this).find(".sumleft i").show();
        }) ;
        $(".selall .nosel").find("i").show();
        $(".give .nosel").find("i").show();
    }