const items = [
  {
    title: 'LIFE LOVE BOOKS',
    stock: 'In Stock',
    image: './images/img1.jpg',
    price: '450',
    quantity: 1
  },
  {
    title: 'THINK STRAIGHT ',
    stock: 'In Stock',
    image: './images/img2.jpg',
    price: '500',
    quantity: 2
  }
];

const itemsFixPrice = items.map((item) => item.price);

export { itemsFixPrice };

export default items;
