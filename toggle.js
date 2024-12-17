    $(document).ready(function() {
        $("#Contact").hide();
        $("#Education").hide();
        $("#RelavCW").hide();
        $("#NextSem").hide();
    
        $(".Contact").click(function() {
            $("#Contact").toggle();
        });
        $(".Education").click(function() {
            $("#Education").toggle();
        });
        $(".RelavCW").click(function() {
            $("#RelavCW").toggle();
        });
        $(".NextSem").click(function() {
            $("#NextSem").toggle();
        });
    });


    $(document).ready(function () { 
        $("#button").click(function () { 
            $("#clemens-img").animate({ 
                width: "200px" 
            }); 
            $("#clemens-img").animate({ 
                height: "300px" 
            }); 
        }); 
    }); 