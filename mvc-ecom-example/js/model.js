// Model for managing products
class Model {
  constructor() {
    this.products = [
      { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
      { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' },
      { id: 3, name: 'Product 3', price: 30, image: 'product3.jpg' },
    ];
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }
}
