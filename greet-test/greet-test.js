describe("Greet Function", function() {
it("Should greet the name passed in English", function(){
    var greetInstance = Greetings();

    assert.equal("Hello Jimmy", greetInstance.checkEnglish("Jimmy", "english"));
});

it("Should greet the name passed in sepedi", function(){
    var greetInstance = Greetings();

    assert.equal("Thobela Jimmy", greetInstance.checkPedi("Jimmy", "sepedi"));
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

})