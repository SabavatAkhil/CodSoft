// Default products array (replace with your actual data or API fetch)
const products = [
    {
        name: 'Mens T shirt',
        imageUrl: 'https://www.jiomart.com/images/product/original/rv3zngnfyp/eyebogler-mens-round-neck-regular-fit-full-length-sleeve-t-shirt-product-images-rv3zngnfyp-0-202402111505.jpg?im=Resize=(600,750)',
        price: '$19.99'
    },
    {
        name: 'skirts',
        imageUrl: 'https://images.meesho.com/images/products/92914537/8mu8u_512.webp',
        price: '$29.99'
    },
    {
        name: 'Mens Blazer',
        imageUrl: 'https://i.pinimg.com/550x/c3/0e/9d/c30e9d48e23762fc212058126688c0a1.jpg',
        price: '$39.99'
    },
    {
        name: 'Mens Solid Formal Shirt',
        imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/r/e/4/m-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagqdf84hs93ses.jpeg?q=90&crop=false',
        price: '$49.99'
    },
    {
        name: 'Ladies party wear one piece Dress',
        imageUrl: 'https://2.wlimg.com/product_images/bc-full/2022/5/10312892/ladies-party-wear-one-piece-dress-1653905062-6366373.jpeg',
        price: '$59.99'
    }
];

// Function to generate product cards
function generateProductCards(products) {
    const productsContainer = document.querySelector('.products .container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;

        productsContainer.appendChild(productCard);
    });
}

// Generate product cards on page load
document.addEventListener('DOMContentLoaded', () => {
    generateProductCards(products);
});