var qNum = 1;
var maxNum;
var session = sessionStorage;
var correct = 0;

function setup() {
    "use strict";
    if(qNum>1){
        $('#prev').show();
    }else{
        $('#prev').hide();
    }
    if(qNum<maxNum){
        $('#next').show();
    }else{
        $('#next').hide();
    }
    $('#example').hide();
    $('#example').empty();
    $('#img').empty();
    $('#answers').empty();
    $('#img').append('<img src="./img/'+session.getItem("type")+'/'+qNum+'.jpg"></img>');
    $('#answers').append('<div><input type="radio" name="answer" value="1">①</div>');
    $('#answers').append('<div><input type="radio" name="answer" value="2">②</div>');
    $('#answers').append('<div><input type="radio" name="answer" value="3">③</div>');
    $('#answers').append('<div><input type="radio" name="answer" value="4">④</div>');
}
function question(){
    "use strict";
    $(document).on('click', '#submit', function() {
        $("#submit").prop("disabled", true);
        $('#example').show();
        switch(session.getItem("type")){
            case "trigonometric":
                if(qNum == 1){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==2){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==3){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==4){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==5){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==6){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==7){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==8){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==9){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==10){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==11){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==12){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==13){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==14){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }
                break;
            case "exponential_logarithmic_function":
                if(qNum == 1){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==2){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==3){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==4){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==5){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==6){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==7){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==8){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==9){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==10){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==11){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==12){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==13){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==14){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==15){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==16){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }
                break;    
            case "complex_plane":
                if(qNum == 1){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==2){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==3){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==4){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==5){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==6){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==7){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==8){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==9){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==10){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==11){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==12){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==13){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==14){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==15){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==16){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==17){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==18){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==19){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }
                break;
            case "differential_method":
                if(qNum == 1){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==2){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==3){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==4){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==5){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==6){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==7){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==8){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==9){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==10){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==11){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==12){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==13){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==14){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==15){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==16){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==17){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==18){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==19){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==20){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==21){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==22){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==23){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==24){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==25){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==26){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==27){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==28){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==29){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==30){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==31){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==32){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==33){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==34){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==35){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==36){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==37){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==38){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==39){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==40){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==41){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==42){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==43){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==44){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==45){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==46){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==47){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==48){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==49){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==50){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==51){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==52){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==53){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==54){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==55){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==56){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==57){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==58){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==59){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==60){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }
                break;
            case "integration_method":
                if(qNum == 1){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==2){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==3){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==4){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==5){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==6){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==7){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==8){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==9){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==10){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==11){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==12){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==13){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==14){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==15){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==16){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==17){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==18){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==19){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==20){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==21){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==22){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==23){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==24){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==25){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==26){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==27){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==28){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==29){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==30){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==31){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==32){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==33){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==34){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==35){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==36){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==37){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==38){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==39){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==40){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==41){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==42){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==43){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==44){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==45){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==46){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==47){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==48){
                    if($('input[name=answer]:checked').val() == 3){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==49){
                    if($('input[name=answer]:checked').val() == 4){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==50){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==51){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==52){
                    if($('input[name=answer]:checked').val() == 1){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }else if(qNum==53){
                    if($('input[name=answer]:checked').val() == 2){
                        $('#example').append('<p><font color = red>正解</p>');
                        correct = correct+1;
                    }else{
                        $('#example').append('<p><font color = blue>不正解</p>');
                    }
                }
                break;
            default:
                break;
        }
        $('#example').append('<img src="./img/'+session.getItem("type")+'/'+qNum+'_example.jpg"></img>');
        qNum = qNum+1;
        $(document).on('click', function(e) {
            if(qNum<=maxNum){
                    $("#submit").prop("disabled", false);
                    $(this).off(e);
                    setup();
            }else{
                session.setItem("max",maxNum);
                session.setItem("correct",correct);
                window.location.href = "result.html";
            }
        });
    });
}
function createPage(){
    "use strict";
    switch(session.getItem("type")){
        case "trigonometric":
            maxNum = 14;
            break;
        case "exponential_logarithmic_function":
            maxNum = 16;
            break;
        case "complex_plane":
            maxNum = 19;
            break;
        case "differential_method":
            maxNum = 60;
            break;
        case "integration_method":
            maxNum = 53;
            break;
        default:
            maxNum = 0;
    }
    setup();
    question();
    $('#prev').append('<button id="prevBtn">前へ</button>');
    $(document).on('click', '#prevBtn', function(e) {
        qNum = qNum - 1;
        setup();
    });
    $('#next').append('<button id="nextBtn">次へ</button>');
    $(document).on('click', '#nextBtn', function(e) {
        qNum = qNum + 1;
        setup();
    });
}