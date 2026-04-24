let allMenu = [];

const menuList = document.querySelector(".menu-grid");

fetch("https://wpu-cafe.vercel.app/api/menu")
.then((res) => res.json()) // karena hasil json bentuknya promise jadi perlu di then lagi
.then((data) => {
    menuList.innerHTML = `<div class="loading"><div class="spinner"></div><p>Loading menu...</p></div>`;
    setTimeout(() => {
        displayMenu(data.data);
    }, 3000);
});

function displayMenu(menu) {
  menuList.innerHTML = '';

  menu.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const image = document.createElement("img");
    image.src = item.image_url;
    image.alt = item.alt;

    card.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = item.name;

    card.appendChild(name);

    menuList.appendChild(card);
  });
}
