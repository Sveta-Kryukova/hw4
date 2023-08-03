function validateObject(object, schema) {
  for (let property in schema) {
    if (schema[property].required && !object.hasOwnProperty(property)) {
      return false;
    }

    if (typeof object[property] !== schema[property].type) {
      return false;
    }

    if (schema[property].validate && !schema[property].validate(object[property])) {
      return false;
    }
  }

  return true;
}

const personSchema = {
  firstName: { type: "string", required: true },
  lastName: { type: "string", required: true },
  age: { type: "number", validate: (age) => age >= 18 },
  email: { type: "string", validate: (email) => /^\S+@\S+$/.test(email) },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "exemple@gmail.com",
};

const person2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 17,
  email: "second@gmail.com",
};