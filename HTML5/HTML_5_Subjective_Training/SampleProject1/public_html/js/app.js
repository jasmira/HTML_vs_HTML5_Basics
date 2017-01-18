$(document).ready(function(){
    //Fetch sunsign from localStorage
    var zodiac = localStorage.getItem('zodiac');
    if(zodiac)
        $("#registeredSign").text("Registered Zodiac: "+zodiac);
    
    $("article img").click(function(){
        var path = $(this).attr('src').substr();
        var fileNameIndex = path.lastIndexOf("/") + 1;
        var fileName = path.substr(fileNameIndex);
        var index = fileName.lastIndexOf(".");
        var sign = fileName.substr(0,index);
        
        $("#signAudio").attr('src','sound/'+sign+'.mp3');
        document.getElementById('signAudio').play();
    });
    
    $("article img").mouseover(function(){       
        var sign = $(this).attr('title').substr();       
        $("#signAudio").attr('src','sound/'+sign+'.mp3');
        document.getElementById('signAudio').play();
    });
});