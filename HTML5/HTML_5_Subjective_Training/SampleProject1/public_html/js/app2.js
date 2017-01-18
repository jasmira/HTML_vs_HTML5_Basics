$(document).ready(function(){
    $("form").submit(function(){
        window.location.href="index.html";
        //store the zodiac in localStorage
        var zodaicVal = $("input[name='zodiac']").val();
        //alert(zodaicVal);
        localStorage.setItem('zodiac',zodaicVal);
        return false;
        
    });
});