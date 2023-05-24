function Greetings() {
  var namesList = [];
  

  function checkPedi(name, language) {
    language = "sepedi";
    return "Thobela " + name;
  }
  function checkEnglish(name, language) {
    language = "english";
    return "Hello " + name;
  }

  function checkXhosa(name, language) {
    language = "isixhosa";
    return "Molo " + name;
  }

  function noLanguage(language) {
    if ((language = "")) {
      return "Select a language";
    }
  }

  function valid(name) {
    var rightName = /^[a-zA-Z]+$/;
    return rightName.test(name);
  }

  function invalid(name) {
    if (!valid(name)) {
      return "Enter a valid name";
    }
  }

  function setName(name) {
    if (namesList.includes(name) === true) {
    } else {
      namesList.push(name);
    }
  }

  function nameCount() {
    return namesList.length;
  }

  return {
    checkPedi,
    checkEnglish,
    checkXhosa,
    setName,
    valid,
    invalid,
    noLanguage,
    nameCount,
  };
}
