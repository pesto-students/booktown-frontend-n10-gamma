const items = [
  {
    title: 'LIFE LOVE BOOKS',
    description: "Love your life , it has to offer a lot more than you expect",
    stock: 'In Stock',
    image: './images/img1.jpg',
    price: '450',
    quantity: 1
  },
  {
    title: 'THINK STRAIGHT ',
    description: "Think Straight and achieve whatever you want to",
    stock: 'In Stock',
    image: './images/img2.jpg',
    price: '500',
    quantity: 2
  }
];

const itemsFixPrice = items.map((item) => item.price);

export { itemsFixPrice };

export default items;
