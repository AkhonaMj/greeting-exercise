function greetings(){

    var nameRecord = 0;


    function checkEnglish(name, language){
        if(language = "english"){
            return "Hello" + name
        }
    }
    
    function checkSepedi(name, language){
        if(language = "sepedi"){
            return "Thobela" + name
        }
    }
    function checkIsixhosa(name, language){
        if(language = "isixhosa"){
            return "Molo" + name
        }
    }

     return {
        checkEnglish,
        checkIsixhosa,
        checkSepedi
     }
        
    }
   
