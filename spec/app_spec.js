describe("backbone user", function() {
  var user;

  beforeEach(function() {
    user = new User();
  });

  it("should have a name", function() {
    user.set({ name: 'name' });
    console.log(user);
    expect(user.get('name')).toEqual('name');
  });
  
  it("should have an email", function() {
    user.set({ email: 'name@website.com' })
    console.log(user);
    expect(user.get('email')).toEqual('name@website.com');
  });   
});