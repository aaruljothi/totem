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

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('new user', user.uid);
    }
});

function addnewuser(user, age, gender) {
    var userobject = {
        'uuid': user.uid,
        'email': user.email,
        'age': age,
        'gender': gender
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