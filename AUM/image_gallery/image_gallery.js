$(document).ready(function(){
    var imageLinks = $("#image_list a"); // is the same as 2 codes: 
    //var imageNode = $("image_list");
    //var imageLinks = imageNode.$("a");
    
    imageLinks.each(function(){
        $(this).click(function(evt){
            // Preload Image
            image = new Image();
            image.src = $(this).attr("href"); // "this" means every a tags
            
            $("#image").attr("src", image.src);
            $("#caption").text($(this).attr("title")); // to put # before the ID
            evt.preventDefault();
        });
    });
    imageLinks[0].focus();
});