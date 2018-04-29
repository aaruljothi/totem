<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.min.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.js"></script>
</head>
<body>

    <template id="post-template">
        <div class="ui card">
            <div class="content">
                <a class="header">{{title}}</a>
                <div class="meta">
                    <span class="date">{{posttime}}</span>
                </div>
                <div class="description">{{description}}</div>
            </div>
            <div class="extra content">
                <div class="ui selection dropdown" id="drop1">
                    <input type="hidden" name="Options">
                    <i class="dropdown icon"></i>
                    <div class="default text">Options</div>
                    <div class="menu">
                        <div class="item" v-for="option in options" data-value="{{option}}">{{option}}</div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
        $(document).ready(function () {
            $('.ui.dropdown').dropdown();
        });
    </script>
    <script>
        $(document).ready(function () {
            getPosts(function (posts) {
                console.log(posts)
            })

        })
    </script>

    <div id="vue-app">
        <post></post>
    </div>

    <script src="/javascripts/post.js"></script>
    <script src="/javascripts/api.js"></script>
</body>
</html>
