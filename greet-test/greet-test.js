describe("Greet Function", function() {
it("Should greet the name passed in", function(){

    let greet = greetings();

    greet.setName("Jimmy");

    assert.equal("Jimmy", greet.setName());
})

})