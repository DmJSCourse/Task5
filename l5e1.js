$("#button").click(submitFunc);

function submitFunc() {
    var firstname = $("#f_name").val();
    var lastname = $("#l_name").val();
    var email = $("#usermail").val();

    var user = {
        firstName: '',
        lastName: '',
        email: ''
    };

    firstname.length < 5 ? (
        $("#f_name").after("<br><span>First name is too short</span>"),
        $("span").addClass("warning 1"),
        $("#f_name").val('')
    ) : (
            user.firstName = firstname,
            $(".1").remove()
        );

    lastname.length < 5 ? (
        $("#l_name").after("<br><span>Last name is too short</span>"),
        $("span").addClass("warning 2"),
        $("#l_name").val('')
    ) : (
            user.lastName = lastname,
            $(".2").remove()
        );

    email.length < 5 ? (
        $("#usermail").after("<br><span>Email is too short</span>"),
        $("span").addClass("warning 3"),
        $("#usermail").val('')
    ) : (
            user.email = email,
            $(".3").remove()
        );

    if (firstname.length >= 5 && lastname.length >= 5 && email.length >= 5) { alert('Success!'); };

    console.log(user);
}