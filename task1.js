const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

Object.defineProperties(person, {
  firstName: {writable: false, configurable: false},
  lastName: {writable: false, configurable: false},
  age: {writable: false, configurable: false},
  email: {writable: false, configurable: false}
});

  person.updateInfo = function (newInfo) {
    Object.keys(newInfo).forEach((key) => {
      if (this.hasOwnProperty(key)) {
        const propertyDescriptor = Object.getOwnPropertyDescriptor(this, key);
  
        if (propertyDescriptor && propertyDescriptor.writable === false) {
        } else {
          this[key] = newInfo[key];
        }
      }
    });
  };

  person.adress = {};

  person.defineProperty(person, "address", {
    enumerable: false,
    configurable: false,
  });

