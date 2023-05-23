function Greetings(){

   var namesList = []; 

    function checkPedi(name, language){
        language = "sepedi"
            return "Thobela " + name;
        }
        function checkEnglish(name, language){
        language = "english"
            return "Hello " + name;
        
    }

    function checkXhosa(name, language){ 
     language = "isixhosa"
            return "Molo " + name;
        }

    function setName(name){
      namesList.push(name)
      namesList.includes(name)
    }

    function nameCount(){
        return namesList.length

}
       


   
     return {
        checkPedi,
        checkEnglish,
        checkXhosa,
        setName,
        nameCount
     }
    }     
