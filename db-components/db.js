// // const jsonFile = "./product.json"

// // fetch(jsonFile).then((res) => {
// //     return res.json();
// // }).then(data => {
// //     data.map(product => {
// //         const { id, name, price, image } = product;
// //         console.log(id, name, price, image)
// //     })
// // })



// const jsonFile = "../../db-components/product.json";

// fetch(jsonFile)
//     .then(res => {
//         // if (!res.ok) {
//         //     throw new Error(`HTTP error! status: ${res.status}`);
//         // }
//         return res.json();
//     })
//     .then(data => {
//         const productContainer = document.getElementById('product-insert');
//         data.forEach(product => {
//             if (product.id) {
//                 const { id, 'P-name': name, price, imageDefault } = product;
//                 const productCard = `
//                     <div class="col-3">
//                         <div class="card" style="width: 18rem;">
//                             <img class="card-img-top" src=${imageDefault} alt="${name}">
//                             <div class="card-body">
//                                 <h5 class="card-title">${name}</h5>
//                                 <p class="card-text">${price}</p>
//                             </div>
//                         </div>
//                     </div>`;
//                 productContainer.insertAdjacentHTML('beforeend', productCard);
//             }
//         });
//     })
//     .catch(error => console.error('Error fetching the JSON file:', error));





// const jsonFile = "../../db-components/product.json";

// fetch(jsonFile)
//     .then(res => res.json())
//     .then(data => {
//         const productContainer = document.getElementById('product-insert');
//         data.forEach(product => {
//             if (product.id) {
                
//                 const { id, 'P-name': name, price, imagedefault } = product;
//                 const productCard = `
//                         <div class="col-3">
//                             <div class="card" style="width: 18rem;">
//                                 <img class="card-img-top" src="${imagedefault}" alt="${name}">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${name}</h5>
//                                     <p class="card-text">${price}</p>
//                                 </div>
//                             </div>
//                         </div>`;
//                 productContainer.insertAdjacentHTML('beforeend', productCard);
//             }
//         });
//     })
//     .catch(error => console.error('Error fetching the JSON file:', error));













// const jsonFile = "../../db-components/product.json";

// // Define the IDs for the men's collection
// const mensCollectionIDs = [1, 2, 4];

// fetch(jsonFile)
//     .then(res => res.json())
//     .then(data => {
//         const productContainer = document.getElementById('product-insert');

//         // Filter the products based on the men's collection IDs
//         const mensProducts = data.filter(product => mensCollectionIDs.includes(product.id));

//         mensProducts.forEach(product => {
//             const { id, 'P-name': name, price, imagedefault, imageHover } = product;
//             const productCard = `
//                 <div class="col-3">
//                     <div class="card" style="width: 18rem;" data-hover-image="${imageHover}" data-default-image="${imagedefault}">
//                         <img class="card-img-top" src="${imagedefault}" alt="${name}">
//                         <div class="card-body">
//                             <h5 class="card-title">${name}</h5>
//                             <p class="card-text">${price}</p>
//                         </div>
//                     </div>
//                 </div>`;

//             productContainer.insertAdjacentHTML('beforeend', productCard);
//         });

//         // Add event listeners to dynamically created cards
//         var cards = document.querySelectorAll('.card');

//         cards.forEach(function (card) {
//             var defaultImage = card.getAttribute('data-default-image');
//             var hoverImage = card.getAttribute('data-hover-image');
//             var img = card.querySelector('.card-img-top');
//             card.addEventListener('mouseenter', function () {
//                 img.src = hoverImage;
//             });

//             card.addEventListener('mouseleave', function () {
//                 img.src = defaultImage;
//             });
//         });
//     })
//     .catch(error => console.error('Error fetching the JSON file:', error));























// // Define the JSON file path
// const jsonFile = "../../db-components/product.json";

// // Define the IDs for the men's collection
// const mensCollectionIDs = [1, 2, 4];

// // Fetch JSON data from the file
// fetch(jsonFile)
//     .then(res => res.json())
//     .then(data => {
//         // Get the product container element
//         const productContainer = document.getElementById('product-insert');

//         // Filter the products based on the men's collection IDs
//         const mensProducts = data.filter(product => mensCollectionIDs.includes(product.id));

//         // Iterate over the filtered products and generate HTML for each
//         mensProducts.forEach(product => {
//             const { id, 'P-name': name, price, imagedefault, imageHover } = product;
//             const productCard = `
//                 <div class="col-3">
//                     <div class="card" style="width: 18rem;" data-hover-image="${imageHover}" data-default-image="${imagedefault}">
//                         <img class="card-img-top" src="${imagedefault}" alt="${name}">
//                         <div class="card-body">
//                             <h5 class="card-title">${name}</h5>
//                             <p class="card-text">${price}</p>
//                         </div>
//                     </div>
//                 </div>`;

//             // Insert the product card HTML into the product container
//             productContainer.insertAdjacentHTML('beforeend', productCard);
//         });

//         // Add event listeners to dynamically created cards for image hover effect
//         var cards = document.querySelectorAll('.card');
//         cards.forEach(function (card) {
//             var defaultImage = card.getAttribute('data-default-image');
//             var hoverImage = card.getAttribute('data-hover-image');
//             var img = card.querySelector('.card-img-top');
//             card.addEventListener('mouseenter', function () {
//                 img.src = hoverImage;
//             });
//             card.addEventListener('mouseleave', function () {
//                 img.src = defaultImage;
//             });
//         });
//     })
//     .catch(error => console.error('Error fetching the JSON file:', error));
