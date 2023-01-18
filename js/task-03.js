const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainer = document.querySelector('.gallery');
const itemImage = document.querySelector('.item');

const imagesString = images.map(image => {
  
  const imageString = `<li class = "item"><img src="${image.url}" alt="${image.alt}" width = "250" height = "160"></li>`;

  return galleryContainer.insertAdjacentHTML("beforeend", imageString);
}
);

galleryContainer.style.display = "flex";
galleryContainer.style.justifyContent = "space-between";
galleryContainer.style.gap = "20px";
galleryContainer.style.listStyleType = "none";
galleryContainer.style.padding = "0";
