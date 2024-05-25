// const jsonFile = "../../db-components/product.json";

// const mensCollection = [5, 8, 2, 9.1];
// const WomensCollection = [5, 8, 2, 9.1, 5.1, 8.1, 9.2, 2.2];
// const sportCollection = [5.1, 8.1, 9.2, 2.2];

// fetch(jsonFile)
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         const mensproductContainer = document.getElementById('product-insert-men');
//         const womensproductContainer = document.getElementById('product-insert-women');
//         const sportproductContainer = document.getElementById('product-insert-sport');

//         const mensProducts = data.filter(product => mensCollection.includes(product.id));
//         const WomensProducts = data.filter(product => WomensCollection.includes(product.id));
//         const sportProducts = data.filter(product => sportCollection.includes(product.id));

//         // // mens product
//         mensProducts.forEach(product => {
//             const { id, 'P-name': name, price, imageDefault, imageHover } = product;
//             const productCard = `
//                 <div class="col-3">
//                     <div class="card" style="width: 18rem;">
//                         <img class="card-img-top"
//                              src="${imageDefault}"
//                              alt="${name}"
//                              data-default-image="${imageDefault}"
//                              data-hover-image="${imageHover}">
//                         <div class="card-body">
//                             <h5 class="card-title">${name}</h5>
//                             <p class="card-text">${price}</p>
//                         </div>
//                     </div>
//                 </div>`;
//             mensproductContainer.insertAdjacentHTML('beforeend', productCard);
//         });
        


//         // // womens product
//         // WomensProducts.forEach(product => {
//         //     const { id, 'P-name': name, price, imageDefault, imageHover } = product;
//         //     const productCard = `
//         //         <div class="col-3">
//         //             <div class="card" style="width: 18rem;">
//         //                 <img class="card-img-top"
//         //                      src="${imageDefault}"
//         //                      alt="${name}"
//         //                      data-default-image="${imageDefault}"
//         //                      data-hover-image="${imageHover}">
//         //                 <div class="card-body">
//         //                     <h5 class="card-title">${name}</h5>
//         //                     <p class="card-text">${price}</p>
//         //                 </div>
//         //             </div>
//         //         </div>`;
//         //     womensproductContainer.insertAdjacentHTML('beforeend', productCard);
//         // });



//         // // sport product
//         // sportProducts.forEach(product => {
//         //     const { id, 'P-name': name, price, imageDefault, imageHover } = product;
//         //     const productCard = `
//         //         <div class="col-3">
//         //             <div class="card" style="width: 18rem;">
//         //                 <img class="card-img-top"
//         //                      src="${imageDefault}"
//         //                      alt="${name}"
//         //                      data-default-image="${imageDefault}"
//         //                      data-hover-image="${imageHover}">
//         //                 <div class="card-body">
//         //                     <h5 class="card-title">${name}</h5>
//         //                     <p class="card-text">${price}</p>
//         //                 </div>
//         //             </div>
//         //         </div>`;
//         //     sportproductContainer.insertAdjacentHTML('beforeend', productCard);
//         // });




//         // Add event listeners for hover effect
//         const cards = document.querySelectorAll('.card');
//         cards.forEach(card => {
//             const img = card.querySelector('.card-img-top');
//             const defaultImage = img.getAttribute('data-default-image');
//             const hoverImage = img.getAttribute('data-hover-image');

//             card.addEventListener('mouseenter', () => {
//                 img.src = hoverImage;
//             });

//             card.addEventListener('mouseleave', () => {
//                 img.src = defaultImage;
//             });
//         });
//     })
//     .catch(error => console.error('Error fetching the JSON file:', error));











const jsonFile = "../../db-components/product.json";

const mensCollection = [5, 8, 2, 9.1];
const sportCollection = [5, 8, 2, 9.1, 5.1, 8.1, 9.2, 2.2];
const womensCollection = [5.1, 8.1, 9.2, 2.2];

fetch(jsonFile)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        const mensproductContainer = document.getElementById('product-insert-men');
        const womensproductContainer = document.getElementById('product-insert-women');
        const sportproductContainer = document.getElementById('product-insert-sport');

        // men's products
        try {
            const mensProducts = data.filter(product => mensCollection.includes(product.id));
            if (mensProducts.length) {
                mensProducts.forEach(product => {
                    const { id, 'P-name': name, price, imageDefault, imageHover } = product;
                    const productCard = `
                        <div class="col-3">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top"
                                     src="${imageDefault}"
                                     alt="${name}"
                                     data-default-image="${imageDefault}"
                                     data-hover-image="${imageHover}">
                                <div class="card-body">
                                    <h5 class="card-title">${name}</h5>
                                    <p class="card-text">${price}</p>
                                </div>
                            </div>
                        </div>`;
                    mensproductContainer.insertAdjacentHTML('beforeend', productCard);
                });
            } else {
                console.error('No mens products found');
            }
        } catch (error) {
            console.error('Error processing mens products:', error);
        }

        // women's products
        try {
            const womensProducts = data.filter(product => womensCollection.includes(product.id));
            if (womensProducts.length) {
                womensProducts.forEach(product => {
                    const { id, 'P-name': name, price, imageDefault, imageHover } = product;
                    const productCard = `
                        <div class="col-3">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top"
                                     src="${imageDefault}"
                                     alt="${name}"
                                     data-default-image="${imageDefault}"
                                     data-hover-image="${imageHover}">
                                <div class="card-body">
                                    <h5 class="card-title">${name}</h5>
                                    <p class="card-text">${price}</p>
                                </div>
                            </div>
                        </div>`;
                    womensproductContainer.insertAdjacentHTML('beforeend', productCard);
                });
            } else {
                console.error('No womens products found');
            }
        } catch (error) {
            console.error('Error processing womens products:', error);
        }

        // sport products
        try {
            const sportProducts = data.filter(product => sportCollection.includes(product.id));
            if (sportProducts.length) {
                sportProducts.forEach(product => {
                    const { id, 'P-name': name, price, imageDefault, imageHover } = product;
                    const productCard = `
                        <div class="col-3">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top"
                                     src="${imageDefault}"
                                     alt="${name}"
                                     data-default-image="${imageDefault}"
                                     data-hover-image="${imageHover}">
                                <div class="card-body">
                                    <h5 class="card-title">${name}</h5>
                                    <p class="card-text">${price}</p>
                                </div>
                            </div>
                        </div>`;
                    sportproductContainer.insertAdjacentHTML('beforeend', productCard);
                });
            } else {
                console.error('No sport products found');
            }
        } catch (error) {
            console.error('Error processing sport products:', error);
        }

        // Add event listeners for hover effect
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const img = card.querySelector('.card-img-top');
            const defaultImage = img.getAttribute('data-default-image');
            const hoverImage = img.getAttribute('data-hover-image');

            card.addEventListener('mouseenter', () => {
                img.src = hoverImage;
            });

            card.addEventListener('mouseleave', () => {
                img.src = defaultImage;
            });
        });
    })
    .catch(error => console.error('Error fetching the JSON file:', error));
