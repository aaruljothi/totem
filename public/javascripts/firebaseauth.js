// Initialize Firebase
var config = {
    apiKey: "AIzaSyAOnOqleoQP9zJYmHFohDjIEIfZ1o8H1yI",
    authDomain: "totem-umbc.firebaseapp.com",
    databaseURL: "https://totem-umbc.firebaseio.com",
    projectId: "totem-umbc",
    storageBucket: "totem-umbc.appspot.com",
    messagingSenderId: "811594686709"
};
firebase.initializeApp(config);

function gottotribepage(){
    window.location.href = "/";
}



function addnewuser(user, age, gender) {
    addUser(makeUser(user.uid,user.email,age,gender,'07067'), function(){
        gottotribepage();
    });
}

function isUserLoggedIn(){
    var user = firebase.auth().currentUser;

    if (!!user == false){
        return false;
    }else{
        return user.uid;
    }
}



function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}