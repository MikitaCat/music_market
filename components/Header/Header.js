class Header {
  //Method to open cart
  handlerOpenCart() {
    cartPage.render();
  }

  render(count) {
    const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenCart()">🛒 ${count}</div>
            </div>
        `;

    ROOT_HEADER.innerHTML = html;
  }
}

let productsStore = localStorageUtil.getProducts();
const headerPage = new Header();
headerPage.render(productsStore.length);
