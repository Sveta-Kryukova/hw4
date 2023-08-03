const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

Object.defineProperties(product, {price: {writable: false, enumerable: false}, quantity: {writable: false, enumerable: false}});

function getTotalPrice(product) {
  price = Object.getOwnPropertyDescriptor(product, "price");
  quantity = Object.getOwnPropertyDescriptor(product, "quantity");

  const totalPrice = product.price * product.quantity;

  return totalPrice
}

function deleteNonConfigurable(object, property) {
  if (object.hasOwnProperty(property)) {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(object, property);

    if (propertyDescriptor.configurable === false) {
      throw new Error("Cannot delete non-configurable property");
    } else {
      delete object[property];
    }
  }
}
