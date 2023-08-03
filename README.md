# Object Property Manipulation and Validation Tasks
This repository contains the implementation of various tasks related to object property manipulation, enumeration, deletion, getters, setters, deep cloning, and property validation in JavaScript.

## Task 1: Object Property Manipulation
In this task, we create an object called person with read-only and non-writable properties using property descriptors. Additionally, we implement an updateInfo method to update the person object while adhering to the read-only property descriptor set earlier. We also create a non-enumerable and non-configurable property called address.

## Task 2: Object Property Enumeration and Deletion
This task involves creating a new object called product and setting the price and quantity properties as non-enumerable and non-writable using property descriptors. We implement a function called getTotalPrice to calculate the total price of the product. Additionally, we create a function called deleteNonConfigurable to delete a specified property from an object while handling non-configurable properties.

## Task 3: Object Property Getters and Setters
We create an object called bankAccount with a default balance of 1000 and use a getter to define the formattedBalance property, which returns the balance with a currency symbol. We also use a setter to define the balance property, which updates the account balance and automatically updates the formattedBalance. Lastly, we implement a transfer method to transfer an amount from one bank account to another, ensuring the correct balance and formattedBalance updates.

## Task 4: Advanced Property Descriptors
We implement a function called createImmutableObject that takes an object as an argument and returns a new object with read-only and non-writable properties using property descriptors. This function handles nested objects and arrays recursively. We use the createImmutableObject function to create an immutable version of the person object from Task 1.

## Task 5: Object Observation
The task involves implementing an observeObject function that takes an object and a callback function as arguments and returns a proxy object. The proxy wraps the original object and invokes the callback function whenever any property of the object is accessed or modified. We use the observeObject function to create a proxy for the person object from Task 1, and the callback logs the property name and the action (get or set) performed on the object.

## Task 6: Object Deep Cloning
In this task, we implement a function called deepCloneObject that takes an object as an argument and returns a deep copy of the object. The function handles circular references and complex nested structures without using JSON methods.

## Task 7: Object Property Validation
The final task involves implementing a function called validateObject that takes an object and a validation schema as arguments. The schema defines the required properties, their types, and any additional validation rules. The function returns true if the object matches the schema and false otherwise.
