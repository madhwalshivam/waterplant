import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imgRO from '../assets/machine1.jpg';
import imgMineral from '../assets/machine.jpg';
import imgFilling from '../assets/machine2.jpg';
import imgBottling from '../assets/machine3.jpeg';
import imgIndustrial from '../assets/machine4.jpg';
import imgSoftening from '../assets/machine5.jpg';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const categories = [
  {
    title: 'RO Plant',
    image: imgRO,
    description: 'Top-tier reverse osmosis services for industrial and commercial usages.',
    link: '/ro-plant',
  },
  {
    title: 'Mineral Water Plant',
    image: imgMineral,
    description: 'Advanced systems ensuring clean, safe mineral-rich water.',
    link: '/mineral-water',
  },
  {
    title: 'Water Filling Machine',
    image: imgFilling,
    description: 'Precision-based machines for streamlined water-filling operations.',
    link: '/water-filling',
  },
  {
    title: '1 Litre Bottling Plant',
    image: imgBottling,
    description: 'High-efficiency bottling solutions for 1-litre units.',
    link: '/bottling-plant',
  },
  {
    title: 'Industrial RO Plant',
    image: imgIndustrial,
    description: 'Purification solutions for large-scale industrial use.',
    link: '/industrial-ro',
  },
  {
    title: 'Water Softening Plant',
    image: imgSoftening,
    description: 'Solutions that remove hardness-causing minerals from water.',
    link: '/softening-plant',
  },
];

const CategorySliderPage = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
          Our Complete Category Range
        </h2>
        <Slider {...sliderSettings}>
          {categories.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col h-full hover:shadow-xl transition duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[350px] object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="mt-auto flex gap-4">
                  <Link
                    to={item.link}
                    className="text-blue-900 font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    Get Best Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CategorySliderPage;
