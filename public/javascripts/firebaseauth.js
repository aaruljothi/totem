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
    window.location.href = "http://www.google.com";
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        gottotribepage()
    }
});

function addnewuser(user, age, gender) {
    var userobject = {
        'username': user.uid,
        'email': user.email,
        'age': age,
        'gender': gender,
        'intrest': '',
        'zipcode': '07067'
    };

    $.ajax({
        type: "POST",
        url: "/register",
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify(userobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: gottotribepage(),
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
}

function isUserLoggedIn(){
    var user = firebase.auth().currentUser;

    return !!user;
}


function dummytest(user, age, gender) {
    var userobject = {
        'username': 'G7fRT3D22HQ',
        'email': 'imtiredandwanttosleep@fuckthis.ugh',
        'age': age,
        'gender': gender,
        'interests': '',
        'zipcode': '07067'
    };

    $.ajax({
        type: "POST",
        url: "/register",
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify(userobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: gottotribepage(),
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
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