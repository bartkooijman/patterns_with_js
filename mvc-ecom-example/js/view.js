// View for rendering products
class View {
  constructor() {
    this.productList = document.getElementById('product-list');
    this.productDetail = document.getElementById('product-detail');
  }

  renderProducts(products) {
    this.productList.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.dataset.id = product.id;
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name}">
        <p>Price: $${product.price}</p>
      `;
      this.productList.appendChild(productElement);
    });
  }

  showProductDetail(product) {
    this.productList.style.display = 'none';
    this.productDetail.style.display = 'block';
    this.productDetail.innerHTML = `
      <div class="product-detail">
        <button class="close">Close</button>
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>Price: $${product.price}</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    `;
  }

  hideProductDetail() {
    this.productDetail.style.display = 'none';
    this.productList.style.display = 'block';
  }
}
