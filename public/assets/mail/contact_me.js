$(document).ready(function(){
    $("#sendMessageButton").click(function (event) {
        event.preventDefault(); // prevent default submit behaviour
        // get values from FORM
        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $("textarea#message").val();
        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(" ") >= 0) {
            firstName = name.split(" ").slice(0, -1).join(" ");
        }
        $this = $("#sendMessageButton");
        var valid_data = validateData(name,email,phone,message);
        console.log(valid_data);
        if(valid_data!==false && typeof valid_data !== undefined)
        {
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
                url: "assets/mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message,
                },
                cache: false,
                success: function () {
                    // Success message
                    $("#success").html("<div id='alert-msg' class='alert alert-success bg-green-300 border border-green-500 my-2 mx-5 rounded-lg'>");
                    $("#success > .alert-success")
                        .html(
                            "<button type='button' id='close-alert' class='close inline-flex items-center justify-center text-xl mx-2 my-2' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-success").append(
                        "<strong class='text-lg'>¡Tu mensaje ha sido enviado con éxito!.</strong>"
                    );
                    $("#success > .alert-success").append("</div>");
                    $('#close-alert').click(function()
                    {
                        $('#success').empty();
                    });
                    //clear all fields
                    $("#contactForm").trigger("reset");
                },
                error: function () {
                    // Fail message
                    $("#success").html("<div id='alert-msg' class='alert alert-danger bg-red-300 border border-red-500 my-2 mx-5 rounded-lg'>");
                    $("#success > .alert-danger")
                        .html(
                            "<button type='button' id='close-alert' class='close inline-flex items-center justify-center text-xl mx-2 my-2' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-danger").append(
                        $("<strong class='text-lg'>").text(
                            "Lo sentimos " +
                                firstName +
                                ", parece ser que el servidor de correo no está respondiendo. ¡Intentalo más tarde!"
                        )
                    );
                    $("#success > .alert-danger").append("</div>");
                    $('#close-alert').click(function()
                    {
                        $('#success').empty();
                    });
                    //clear all fields
                    $("#contactForm").trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                },
            });
        }
        function validateData(name,email,phone,message)
        {
            var dataArray = {};
            var characterRegName = /^\s*[a-zA-Z0-9_ ,\s]+\s*$/;
            var numericRegPhone = /^\s*?[0-9]{10,}\s*$/;
            var emailRegEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            dataArray['name']=validateName();
            dataArray['email']=validateMail();
            dataArray['phone']=validatePhone();
            dataArray['message']=validateMessage();
            function validateName()
            {
                if(name=="")
                {
                    if($("#contactForm #name-contact-div").after)
                        $("#contactForm #name-contact-div").next('span').remove();
                    
                    $("#contactForm #name").addClass('required-field');
                    $("#contactForm #name").css({"background-color":"rgb(255,177,177)","border-color":"#FF0000","border-width":"1px"});
                    $("#contactForm #name-contact-div").after('<span class="text-red-600" id="alert-message">Por favor, introduce tu nombre.</span>');
                    return false;
                }
                else
                {
                    if(!characterRegName.test(name))
                    {
                        if($("#contactForm #name-contact-div").after)
                            $("#contactForm #name-contact-div").next('span').remove();

                        $("input#name").addClass('required-field');
                        $("input#name").css({"background-color":"rgb(255,177,177)","border-color":"#FF0000","border-width":"1px"});
                        $("#contactForm #name-contact-div").after('<span class="text-red-600">Los caracteres especiales no están permitidos. Por favor, introduce un nombre válido</span>');
                        return false;
                    }
                    else
                        return true;
                }
            }
            function validateMail()
            {
                if(email=="")
                {
                    if($("#contactForm #email-contact-div").after)
                        $("#contactForm #email-contact-div").next('span').remove();
                    
                    $("#contactForm #email").addClass('required-field');
                    $("#contactForm #email").css({"background-color":"rgb(255,177,177)","border-color":"#FF0000","border-width":"1px"});
                    $("#contactForm #email-contact-div").after('<span class="text-red-600" id="alert-message">Por favor, introduce un e-mail.</span>');
                    return false;
                }
                else
                {
                    if(!emailRegEmail.test(email))
                    {
                        if($("contactForm #email-contact-div").after)
                            $("contactForm #email-contact-div").next('span').remove();

                        $("input#mail").addClass('required-field');
                        $("input#mail").css({"background-color":"rgb(255,177,177)","border-color":"#FF0000","border-width":"1px"});
                        $("contactForm #email-contact-div").after('<span class="text-red-600">Formato de E-mail no válido. Por favor, introduce una dirección de correo válida.</span>');
                        return false;
                    }
                    else
                        return true;
                }
            }
            function validatePhone()
            {
                if(phone=="")
                {
                    if($("#contactForm #phone-contact-div").after)
                        $("#contactForm #phone-contact-div").next('span').remove();
                    
                    $("#contactForm #phone").addClass('required-field');
                    $("#contactForm #phone").css({"background-color":"rgb(255,177,177)","border-color":"#FF0000","border-width":"1px"});
                    $("#contactForm #phone-contact-div").after('<span class="text-red-600" id="alert-message">Por favor, introduce un número telefónico.</span>');
                    return false;
                }
                else
                {
                    if(!numericRegPhone.test(phone))
                    {
                        if($("phone-contact-div").after)
                            $("phone-contact-div").next('span').remove();

                        $("input#phone").addClass('required-field');
                        $("input#phone").css({"background-color":"rgb(255,177,177)","border-color":"#FF0000","border-width":"1px"});
                        $("phone-contact-div").after('<span class="text-red-600">Formato de número telefónico no válido. Por favor, introduce un número válido.</span>');
                        return false;
                    }
                    else
                        return true;
                }
            }
            function validateMessage()
            {
                if(message=='')
                {
                    if($("#contactForm #message-contact-div").after)
                        $("#contactForm #message-contact-div").next('span').remove();
                    
                    $("#contactForm #message").addClass('required-field');
                    $("#contactForm #message").css({"background-color":"rgb(255,177,177)","border-color":"#FF0000","border-width":"1px"});
                    $("#contactForm #message-contact-div").after('<span class="text-red-600" id="alert-message">Por favor, introduce un mensaje.</span>');
                    return false;
                }
                else
                {
                    return true;
                }
            }
            if(Object.keys(dataArray).every((k) => dataArray[k]))
                return true;
            else
                return false;
        }
    });
    $("#contactForm input").focus(function (event) {
        if($(this).hasClass('required-field'))
        {
            $(this).removeAttr('style');
            $(this).parent().next('span').remove();
            $(this).removeClass('required-field');
        }
    });
    $("#contactForm textarea").focus(function (event) {
        if($(this).hasClass('required-field'))
        {
            $(this).removeAttr('style');
            $(this).parent().next('span').remove();
            $(this).removeClass('required-field');
        }
    });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $("#success").html("");
});
