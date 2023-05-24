describe("Greet Function", function() {
it("Should greet the name passed in English", function(){
    var greetInstance = Greetings();

    assert.equal("Hello Jimmy", greetInstance.checkEnglish("Jimmy", "english"));
});

it("Should greet the name passed in sepedi", function(){
    var greetInstance = Greetings();

    assert.equal("Thobela Jimmy", greetInstance.checkPedi("Jimmy", "sepedi"));
});

it("Should greet the name passed in isixhosa", function(){
    var greetInstance = Greetings();

    assert.equal("Molo Jimmy", greetInstance.checkXhosa("Jimmy", "isixhosa"));
});


it("Should increment the counter each time you greet the user ", function(){
    let greetInstance = Greetings();
    greetInstance.setName("Jimmy")
    greetInstance.setName("Karabo")

    assert.equal(2, greetInstance.nameCount());
})
it("Should  not increment the counter if the name is passed in more than once ", function(){
    let greetInstance = Greetings();
    greetInstance.setName("Jimmy")
    greetInstance.setName("Jimmy")

    assert.equal(1, greetInstance.nameCount());
})

it("Should return an error message for names with special charecters", function(){
    var greetInstance = Greetings();

    assert.equal("Enter a valid name", greetInstance.invalid("e537@", "english"));
});

it("Should return an error message if there is no name passed in", function(){
    var greetInstance = Greetings();

    assert.equal("Enter a valid name", greetInstance.invalid("", "english"));
});

it("Should return an error message if there is no name and language selected ", function(){
    var greetInstance = Greetings();

    assert.equal("Enter a name and Select a language", greetInstance.noLanguage("", ""));
});

})