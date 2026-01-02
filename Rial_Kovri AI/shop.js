// ===== МОДАЛЬНОЕ ОКНО =====

function openModal() {
  document.getElementById("first").style.display = "block";
}

function closeModal() {
  document.getElementById("first").style.display = "none";
}

// ===== ГАЛЕРЕЯ =====

const images = [
  "img/carpet1/carpet.png",
  "img/carpet1/carpet2.png",
  "img/carpet1/carpet3.png"
];

let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById("firstGallery");
  if (img) img.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// ===== КОРЗИНА =====

function addToCart(id, title, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = cart.find(p => p.id === id);

  if (item) {
    item.count += 1;
  } else {
    cart.push({
      id: id,
      title: title,
      price: price,
      count: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Товар добавлен в корзину");
}
