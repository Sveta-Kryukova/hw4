
function deepCloneObject(object) {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  const initialOutput = Array.isArray(object) ? [] : {};

  return Object.keys(object).reduce((acc, key) => {
    acc[key] = deepCloneObject(object[key]);
    return acc;
  }, initialOutput);
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "example@gmail.com",
  address: {
    street: {
      number: 100,
      name: "Main St",
    },
    city: "New York",
    state: "NY",
  },
};

//or use method structuredClone() ;)