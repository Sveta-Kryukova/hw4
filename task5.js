const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
  email: "example@gmail.com",
};

function observeObject(object, callback) {
  const handler = {
    get(target, property) {
      callback(property, "get");
      return target[property];
    },
    set(target, property, value) {
      callback(property, "set");
      target[property] = value;
      return true;
    }
  };

  return new Proxy(object, handler);
}

const personProxy = observeObject(person, (property, action) => {
  console.log(`${property} was ${action}ed.`);
}
);

personProxy.firstName = "John";
personProxy.lastName = "Smith";
personProxy.age = 31;
personProxy.email = "someEmail@gmail.com";

