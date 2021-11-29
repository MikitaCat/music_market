class Products {
  render() {
    let htmlCatalog = '';
    CATALOG.forEach(({ id, name, img, price }) => {
      htmlCatalog += `
            <li>
                <span>${name}</span>
                <img src="${img}" />
                <span>${price}</span>
            </li>
        `;
    });

    const html = `
        <ul>
            ${htmlCatalog}
        </ul>
    `;
  }
}

const productsPage = new Products();
productsPage.render();
