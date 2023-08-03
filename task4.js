function createImmutableObject(person) {
  const targetObject = {};

  Object.keys(person).forEach((key) => {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(person, key);

    if (propertyDescriptor && typeof propertyDescriptor.value === "object") {
      targetObject[key] = createImmutableObject(person[key]);
    } else {
      propertyDescriptor.writable = false;
      propertyDescriptor.configurable = false;
      targetObject[key] = propertyDescriptor.value;
    }
  })

  return targetObject;
}

console.log(createImmutableObject(person));
