function createProduct(parent, imgUrl, productTitle, textPrice,idProduct) {
  const product = document.createElement("div");
  product.className = "product";
  product.setAttribute ("id", idProduct)

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);

  product.addEventListener("click", (e) => {
    cartList.push(
      productList.find(
        (product) => parseInt(e.currentTarget.id) === product.id)
      )
    }
  )
}

function createImg(parent, imgUrl, productTitle) {
  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = productTitle;

  parent.appendChild(image);


}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}

// fetch("https://fakestoreapi.com/products") // <== importare la lista prodotti in modo remoto
//   .then((response) => response.json())
//   .then((data) => {
//     products = data;
//     renderProducts();
//   });

const wrapperProducts = document.querySelector(".wrapper__products");
const cartBtn = document.querySelector(".cartBtn")
const cartList = [];
let productList = [];

function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(wrapperProducts, product.image, product.title, product.price, product.id);
  });
}

// Async await
const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  productList = data;

  return renderProducts(data);
};

getProductsList();
cartBtn.addEventListener("click", () =>
console.log(cartList))
