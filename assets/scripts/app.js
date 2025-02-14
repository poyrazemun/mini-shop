class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;
}

const productList = {
  products: [
    //new Product(),
    {
      title: "A Pillow",
      imageUrl:
        "https://witcdn.isbiryatak.com/elyaf-yastik-silikon-yastiklar-isbir-yatak-1647-52-B.jpg",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://emmeti.rs/wp-content/uploads/2024/08/french-style-carpet-hali-8745-624.jpg",
      price: 89.99,
      description: "A soft carpet!",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}" class="product-image">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}<p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
