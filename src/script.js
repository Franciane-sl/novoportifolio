$(document).ready(() =>{
    $(".nav-toggle").on("click", () => {
        $("#nav-bar ul").slideToggle("medium");
    });

    $("#contact-form").on("submit",function(event){
        event.preventDefault();

        const formnData = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        }

       console.log(formnData); 
    })
   


});