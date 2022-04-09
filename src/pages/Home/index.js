import React from 'react';

import './index.scss'

// components 
import HeroSlider from '../../components/Widgets/HeroSlider';
import ProductRecommendation from '../../components/Widgets/ProductRecommendation';
import Discovery from '../../components/Widgets/Discovery';

const homePageOrders = {
  heroSlider: {
    items: [
      {
        image: "https://via.placeholder.com/1500x600",
        alt: "Test test",
        link: "/products",
      },
      {
        image: "https://via.placeholder.com/1500x600",
        alt: "Test test",
        link: "",
      },
    ]
  },
  productRecommendation1: {
    products: [
      {
        id: 1,
        photos: [
          "https://picsum.photos/800/500",
          "https://picsum.photos/id/237/800/500",
        ],
        title: "Toshiba Notebook1 Toshiba Notebook1 Toshiba Notebook1 Toshiba Notebook1 Toshiba Notebook1 Toshiba Notebook1",
        description:
          "Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. You're meant to have fun in life. Clouds are free. They just float around the sky all day and have fun.\n\nSee there how easy that is. Automatically, all of these beautiful, beautiful things will happen. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. These trees are so much fun. I get started on them and I have a hard time stopping. Life is too short to be alone, too precious. Share it with a friend.",
        price: 600,
        retailPrice: 900,
        currency: "₺",
      },
      {
        id: 2,
        photos: [
          "https://picsum.photos/800/500",
          "https://picsum.photos/id/237/800/500",
        ],
        title: "Dell Notebook2",
        description:
          "Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. You're meant to have fun in life. Clouds are free. They just float around the sky all day and have fun.\n\nSee there how easy that is. Automatically, all of these beautiful, beautiful things will happen. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. These trees are so much fun. I get started on them and I have a hard time stopping. Life is too short to be alone, too precious. Share it with a friend.",
        price: 600,
        retailPrice: 900,
        currency: "₺",
      },
      {
        id: 3,
        photos: [
          "https://picsum.photos/800/500",
          "https://picsum.photos/id/237/800/500",
        ],
        title: "Macbook3",
        description:
          "Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. You're meant to have fun in life. Clouds are free. They just float around the sky all day and have fun.\n\nSee there how easy that is. Automatically, all of these beautiful, beautiful things will happen. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. These trees are so much fun. I get started on them and I have a hard time stopping. Life is too short to be alone, too precious. Share it with a friend.",
        price: 600,
        retailPrice: 900,
        currency: "₺",
      },
      {
        id: 4,
        photos: [
          "https://picsum.photos/800/500",
          "https://picsum.photos/id/237/800/500",
        ],
        title: "Acer4",
        description:
          "Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. You're meant to have fun in life. Clouds are free. They just float around the sky all day and have fun.\n\nSee there how easy that is. Automatically, all of these beautiful, beautiful things will happen. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. These trees are so much fun. I get started on them and I have a hard time stopping. Life is too short to be alone, too precious. Share it with a friend.",
        price: 600,
        retailPrice: 900,
        currency: "₺",
      },
    ],
    title: 'Products For You',
  },
  productRecommendation2: {
    products: [
      {
        id: 1,
        photos: [
          "https://picsum.photos/800/500",
          "https://picsum.photos/id/237/800/500",
        ],
        title: "Toshiba Notebook1 Toshiba Notebook1 Toshiba Notebook1 Toshiba Notebook1 Toshiba Notebook1 Toshiba Notebook1",
        description:
          "Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. You're meant to have fun in life. Clouds are free. They just float around the sky all day and have fun.\n\nSee there how easy that is. Automatically, all of these beautiful, beautiful things will happen. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. These trees are so much fun. I get started on them and I have a hard time stopping. Life is too short to be alone, too precious. Share it with a friend.",
        price: 600,
        retailPrice: 900,
        currency: "₺",
      },
      {
        id: 2,
        photos: [
          "https://picsum.photos/800/500",
          "https://picsum.photos/id/237/800/500",
        ],
        title: "Dell Notebook2",
        description:
          "Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. You're meant to have fun in life. Clouds are free. They just float around the sky all day and have fun.\n\nSee there how easy that is. Automatically, all of these beautiful, beautiful things will happen. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. These trees are so much fun. I get started on them and I have a hard time stopping. Life is too short to be alone, too precious. Share it with a friend.",
        price: 600,
        retailPrice: 900,
        currency: "₺",
      },
      {
        id: 3,
        photos: [
          "https://picsum.photos/800/500",
          "https://picsum.photos/id/237/800/500",
        ],
        title: "Macbook3",
        description:
          "Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. You're meant to have fun in life. Clouds are free. They just float around the sky all day and have fun.\n\nSee there how easy that is. Automatically, all of these beautiful, beautiful things will happen. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. These trees are so much fun. I get started on them and I have a hard time stopping. Life is too short to be alone, too precious. Share it with a friend.",
        price: 600,
        retailPrice: 900,
        currency: "₺",
      },
      {
        id: 4,
        photos: [
          "https://picsum.photos/800/500",
          "https://picsum.photos/id/237/800/500",
        ],
        title: "Acer4",
        description:
          "Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. You're meant to have fun in life. Clouds are free. They just float around the sky all day and have fun.\n\nSee there how easy that is. Automatically, all of these beautiful, beautiful things will happen. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. These trees are so much fun. I get started on them and I have a hard time stopping. Life is too short to be alone, too precious. Share it with a friend.",
        price: 600,
        retailPrice: 900,
        currency: "₺",
      },
    ],
  }
}

function Home() {
  return (
    <main className="home">
      <HeroSlider sliderİtems={homePageOrders.heroSlider} />
      <ProductRecommendation items={homePageOrders.productRecommendation1} />
      <Discovery />
      <ProductRecommendation items={homePageOrders.productRecommendation2} />
    </main>
  )
}

export default Home