// Controller for managing product interactions
class ProductController {
  constructor(model, view, router) {
    this.model = model;
    this.view = view;
    this.router = router;
    this.productList = document.getElementById("product-list");
    this.productDetail = document.getElementById("product-detail");
  }

  init() {
    const products = this.model.getProducts();
    this.view.renderProducts(products);

    // Add click event listener to each product
    this.productList.addEventListener("click", (event) => {
      const productId = parseInt(event.target.closest(".product").dataset.id);
      this.router.addRoute(`product/${productId}`, () => {
        const product = this.model.getProductById(productId);
        if (product) {
          this.view.showProductDetail(product);
        }
      });
      location.hash = `product/${productId}`;
    });

    // Add click event listener to close product detail
    this.productDetail.addEventListener("click", (event) => {
      if (event.target.classList.contains("close")) {
        this.view.hideProductDetail();
        location.hash = "";
      }
    });

    // Initialize router
    this.router.addRoute("", () => {
      this.view.hideProductDetail();
      this.productList.style.display = "block";
    });
    window.addEventListener("hashchange", () => {
      this.router.navigate();
    });
    this.router.navigate();
  }
}
