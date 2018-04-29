
function dummytest(user, age, gender) {
    var userobject = {
        'username': 'G7fRT3D22HQ',
        'email': 'imtiredandwanttosleep@fuckthis.ugh',
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
        failure: function (errMsg) {
            alert(errMsg);
        }
    });
}

function updateInterests(username, interests, cb) {
    interests = interests.join(',');
    interests = {
        interests: interests
    }
    $.ajax({
        type: "PUT",
        data: interests,
        dataType: "json",
        url: "/user/" + username + "/update",
        success: cb,
        failure: function (err) {
            alert(err);
        }
    })
}

function updatePost(postid, username, cb) {
    username = {
        username:username
    }
    $.ajax({
        type: "PUT",
        data: username,
        url: "/posts/" + postid + "/update",
        success: cb,
        failure: function (err) {
            alert(err);
        }
    })
}

function getCommentByPostCommentIds(postid, commentid, cb) {
    $.ajax({
        type: "GET",
        url: "/posts/" + postid + "/comments/" + commentid,
        success: cb,
        failure: function (err) {
            alert(err);
        }
    })
}

function getPostById(postid, cb) {
    $.ajax({
        type: "GET",
        url: "/posts/" + postid,
        success: cb,
        failure: function (err) {
            alert(err);
        }
    })
}

function getCommentsByUsername(username, cb) {
    $.ajax({
        type: "GET",
        url: "/user/" + username + "/comments",
        success: cb,
        failure: function (err) {
            alert(err);
        }
    })
}

function getUserByUsername(username, cb) {
    $.ajax({
        type: "GET",
        url: "/user/" + username,
        success: cb,
        failure: function (err) {
            alert(err);
        }
    })
}

function getPostsByUsername(username, cb) {
    $.ajax({
        type: "GET",
        url: "/user/" + username + "/posts",
        success: cb,
        failure: function (err) {
            alert(err);
        }
    })
}

function getPosts(cb) {
    $.ajax({
        type: "GET",
        url: "/posts",
        success: cb,
        failure: function (err) {
            alert(err);
        }
    })
}

function makeComment(uname, msg, vote) {
    tNow = new Date();
    timestamp = tNow.toGMTString().split(',')[1];
    var cObject = {
        'author': uname,
        'body': msg,
        'vote': vote,
        'timestamp': timestamp,
    }
    return cObject;
}

function addComment(postid, comment, cb) {
    uname = comment.author;
    $.ajax({
        type: "POST",
        url: "/posts/" + postid + "/comments",
        data: JSON.stringify(comment),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        // success: updatePost(postid, uname, cb),
        success: cb,
        failure: function (errMsg) {
            alert(errMsg);
            console.log(errMsg);
        }
    });
}

function makePost(uname, title, doc, docType, vOps, tags) {
    tNow = new Date();
    timestamp = tNow.toGMTString().split(',')[1];
    var pObject = {
        'author': uname,
        'title': title,
        'doc': doc,
        'docType': docType,
        'voteOptions': vOps,
        'tags': tags,
        'timestamp': timestamp,
    }
    return pObject;
}

function addPost(post, cb) {
    $.ajax({
        type: "POST",
        url: "/posts",
        data: JSON.stringify(post),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: cb,
        failure: function (errMsg) {
            alert(errMsg);
            console.log(errMsg);
        }
    });
}

function makeUser(uname, email, age, gender, zipcode) {
    var uObject = {
        'username': uname,
        'email': email,
        'age': age,
        'gender': gender,
        'zipcode': zipcode
    }
    return uObject;
}

function addUser(user, cb) {
    $.ajax({
        type: "POST",
        url: "/register",
        data: JSON.stringify(user),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: cb,
        failure: function (errMsg) {
            alert(errMsg);
            console.log(errMsg);
        }
    });
}

// function 