$(document).ready(function () {
    $('#addRespButton').click(function(){
        $('.responseContainer').append('<div class="field"><input class="resp" type="text" placeholder="response"></div>');
    })

    $('#formSubmit').click(function(){
        if ($('#poll_doc').get(0).files.length != 0){
            var filename = $("#poll_doc").val();
            var binType = filename.replace(/^.*\./, '');
            filetoblob($('#poll_doc').files[0], function(res){
                var bin_ = res; 
                continueSubmit(bin, binType);
            });
        }
        if (($('#poll_doc').get(0).files.length === 0) && ($('#poll_link').val() != '')){
            bin = $('#poll_link').val();
            binType = 'text';
            continueSubmit(bin, binType);
        }else{
            continueSubmit('','');
        }
    });
    $('#poll_link').keyup(function(){
        if ($('#poll_link').val() != ''){
            $('#poll_doc').attr('disabled', true);
        }else{
            $('#poll_doc').attr('disabled', false);;
        }
    });
    $('#poll_doc').change(function(){
        if (($('#poll_doc').get(0).files.length === 0)){
            $('#poll_link').attr('disabled', false);
        }else{
            $('#poll_link').attr('disabled', true);
        }
    });
});

function continueSubmit(bin_, binType){
    var uid = isUserLoggedIn();
    var vops = [];
    $('.resp').each(function(){
        vops.push($(this).val());
    });
    var tags = $('#poll_tags').val().split(',');
    var poll = makePoll(uid, $('#poll_title').val(), bin_, binType,vops,tags);
    addPoll(poll, function(success){
        console.log(success);
        alert('Poll Added!');
    });
}