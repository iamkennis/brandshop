
const SHOP_DATA = {
 watch: {
    id: 1,
    title: 'Wrist Watches',
    routeName: 'watch',
    items: [
      {
        id: 1,
        name: 'Amry Bag',
        imageUrl: 'https://i.ibb.co/zn5JcsS/watch-1.jpg ',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl:'https://i.ibb.co/Pc1VvDG/watch-8.jpg ',                                                       
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/jznwzXP/watch-3.jpg ',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/YN1gB8m/watch-4.jpg ',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/s3nwvCk/watch-5.jpg ',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/MpDnw1F/watch-6.jpg ',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/P108hWZ/watch-7.jpg ',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl:  'https://i.ibb.co/CMQPJkF/watch-2.jpg ',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/6WgpYCs/watch-9.jpg ',
        price: 16
      }
    ]
  },
 sneakers : {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/hMmfd6Y/sneakers-1.jpg ',
        price: 220
      },
      {
        id: 11,
        name: ' Yeezy',
        imageUrl: 'https://i.ibb.co/SmNFb35/sneakers-5.jpg ',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: ' https://i.ibb.co/wLDZpM9/sneakers-7.jpg ',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1v5H5Gy/sneakers-4.jpg ',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/RpwJNq8/sneakers-5.jpg ',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/CHHFq23/sneakers-6.jpg ',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/MnsWTpm/sneakers-7.jpg ',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/6rTmS1w/sneakers-8.jpg ',
        price: 200
      }
    ]
  },
 packs : {
    id: 3,
    title: 'Back Packs',
    routeName: 'packs',
    items: [
      {
        id: 18,
        name: 'Amry Bag',
        imageUrl: 'https://i.ibb.co/mT7yMYm/bag-1.jpg ',
        price: 125
      },
      {
        id: 19,
        name: ' Red Pack',
        imageUrl: 'https://i.ibb.co/wMxdxQ2/bag-5.jpg ',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Bag',
        imageUrl: 'https://i.ibb.co/s1qxn8c/bag-3.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Shearling Bag',
        imageUrl: 'https://i.ibb.co/ZKN0V4r/bag-4.jpg ',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/dJy0X4N/bag-6.jpg ',
        price: 185
      }
    ]
  },
 womens:{
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Dress Tanktop',
        imageUrl: 'https://i.ibb.co/wW3ys84/women-1.jpg ',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/8N2qdZV/women-2.jpg ',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/jfKnNfp/women-7.jpg ',
        price: 80
      },
      {
        id: 26,
        name: 'Rad Dot Dress',
        imageUrl: 'https://i.ibb.co/P6Cc3SG/women-4.jpg ',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/LZk5GDM/women-5.jpg ',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/N9gwzTp/women-3.jpg ',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/vQL5Mw2/women-6.jpg ',
        price: 20
      }
    ]
  },
 mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/Fn8fxKd/men-1.jpg ',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/JBgwS6z/men-2.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/FzH7Y28/men-3.jpg ',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/QpqB3xv/men-0.jpg ',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/M7pfTXW/men-5.jpg ',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: ' https://i.ibb.co/M7pfTXW/men-5.jpg ',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
