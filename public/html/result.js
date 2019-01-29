var session = sessionStorage;
function result(){
    "use strict";
    $('#result').append('<p>あなたの正解数は'+session.getItem("correct")+'/'+session.getItem("max")+'でした<p>')
}