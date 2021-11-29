class Cart {
  //Method to close the cart table
  handleCloseCart() {
    ROOT_CART.innerHTML = '';
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
                <tr>
                    <td class="cart-element__name">🎸 ${name}</td>
                    <td class="cart-element__price">${price.toLocaleString()} USD</td>
                </tr>
            `;
        sumCatalog += price;
      }
    });

    const html = `
        <div class="cart-container">
            <div class="cart__close" onclick="cartPage.handleCloseCart()">
            
            </div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="cart-element__name">💰 Total Amount</td>
                        <td class="cart-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
        </div>
    `;
    ROOT_CART.innerHTML = html;
  }
}

const cartPage = new Cart();
