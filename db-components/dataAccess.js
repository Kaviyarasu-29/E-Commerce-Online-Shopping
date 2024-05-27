const jsonFile = "../../db-components/product.json";

fetch(jsonFile)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const mensproductContainer = document.getElementById('product-insert-men');
        const womensproductContainer = document.getElementById('product-insert-women');
        const sportproductContainer = document.getElementById('product-insert-sport');

        //men category
        try {
            const menCategory = data.find(category => category.name == 'men');
            if (menCategory) {
                menCategory.products.forEach(product => {
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
            }
        } catch (error) {
            console.error('Error processing mens products:', error);
        }

        //women category
        try {
            const womenCategory = data.find(category => category.name == 'women');
            if (womenCategory) {
                womenCategory.products.forEach(product => {
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
            }
        } catch (error) {
            console.error('Error processing womens products:', error);
        }

        //sport category
        try {
            const sportCategory = data.find(category => category.name == 'sport');
            if (sportCategory) {
                sportCategory.products.forEach(product => {
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
    .catch(error => console.error('Error fetching or processing the JSON file:', error));
