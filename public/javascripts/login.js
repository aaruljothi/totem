function uploadimage() {
    console.log('upload image')
}

$('#agedropdown').dropdown();

function createnewuserclick() {
    if ($('#password2').val() === $('#retypepassword2').val()) {
        console.log('getting in');
        firebase.auth().createUserWithEmailAndPassword($('#email2').val(), $('#password2').val()).then(function(user){
            addnewuser(user, $('#age').val(), $("#gendropdown option:selected").text());
        }, function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
    
}

$('#login').click(function () {
    console.log($('#email1').val(), $('#password1').val());
    firebase.auth().signInWithEmailAndPassword($('#email1').val(), $('#password1').val()).then(function(user){
        gottotribepage();
    }, function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
    });
})

function newuserclick() {
    $('#newusermodel').modal('show');
}


