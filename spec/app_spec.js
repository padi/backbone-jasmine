describe("backbone user", function() {
  var user;

  beforeEach(function() {
    user = new User();
  });

  it("should have a name", function() {
    user.set({ name: 'name' });
    expect(user.get('name')).toEqual('name');
  });
  
  it("should have an email", function() {
    user.set({ email: 'name@website.com' });
    expect(user.get('email')).toEqual('name@website.com');
  });   
});