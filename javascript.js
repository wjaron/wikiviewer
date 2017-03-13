/**
 * Created by wjaron on 13.03.17.
 */
$(document).ready(function () {
    $('#searchbutton').on('click', function () {
        var searchdata = $('#searchbox').val();
        var link = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=";
        //var page = 'https://en.wikipedia.org/?curid=';

        if (searchdata.length > 0) {
            $.ajax({
                url: link + searchdata,
                dataType: 'jsonp',
                type: 'POST',
                headers: {'Api-User-Agent': 'Example/1.0'},
                success: function (data) {

                    $('#searchresults').empty();
                    $(data['query']['search']).each(function () {
                        $('#searchresults').append('<div class="title">' + this['title'] + '</div><div class="description">' + this['snippet'] + '</div>')
                    })
                }
            });
        }
    })
})