jQuery(document).ready(function(){
    jQuery('.add-review').css("display","none");
    jQuery('.submit-review-btn,.add-review-link').click(function(){
        jQuery('.add-review').css("display","block");
    });
});
// add-review