fetch('data/data.json')
  .then(response => response.json())
  .then(products => {
    const featuredProducts = products.filter(product => product.featured);
    const featuredProductsContainer = document.getElementById('featured-products');   


    featuredProducts.forEach(product => {
      const productHTML = `
        <div class="col-md-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>   

              <a href="#" class="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>   

      `;
      featuredProductsContainer.innerHTML += productHTML;
    });

    const allProductsContainer = document.getElementById('all-products');

    products.forEach(product => {
      const productHTML = `
        <div class="col-md-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>   

              <a href="#" class="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>   

      `;
      allProductsContainer.innerHTML += productHTML;
    });
  });