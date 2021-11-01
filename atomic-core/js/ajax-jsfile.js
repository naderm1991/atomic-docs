$(document).ready(function(){
    $(".form-create-jsfile").on("change", "input:checkbox", function(){
        $(this).parent(".form-create-jsfile").submit();
    });

    $(".form-create-cdn-jsfile").on("change", "input:checkbox", function(){
        $(this).parent(".form-create-cdn-jsfile").submit();
    });
});
