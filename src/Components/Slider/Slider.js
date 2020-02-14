import React from 'react';
import './Slider.css';
import Slider from 'react-slick';
import { Card } from '../Card/Card';
import { MdHeadsetMic, MdBusiness } from 'react-icons/md';
import { GoBrowser } from 'react-icons/go';
import { FiPenTool } from 'react-icons/fi';
import { FaMoneyBillWave } from 'react-icons/fa';

export const ExploreSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          infinite: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <Card
          label="Finance"
          bgColor="#EAF2F3"
          color="#a0c3c7"
          icon={<FaMoneyBillWave />}
          text="Lorem ipsum, dolor sit amet consectetur .dolor sit amet consectetur elit adipisicing"
        />
        <Card
          color="#C5C3D8"
          bgColor="#F8F1FF"
          icon={<FiPenTool />}
          label="Design"
          text="Lorem ipsum, dolor sit amet consectetur .dolor sit amet consectetur elit adipisicing"
        />
        <Card
          bgColor="#F9F3EB"
          color="#DEBFAA"
          label="Business development"
          icon={<MdBusiness />}
          text="Lorem ipsum, dolor sit amet consectetur .dolor "
        />
        <Card
          color="#fff"
          bgColor="#FF6158"
          icon={<MdHeadsetMic />}
          label="customer support"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
        />
        <Card
          bgColor="#f3e7e6"
          color="#bd9f9b"
          icon={<GoBrowser />}
          label="Devolper"
          text="Lorem ipsum, dolor sit amet consectetur .dolor sit amet consectetur elit adipisicing"
        />
        <Card
          color="#C5C3D8"
          bgColor="#F8F1FF"
          icon={<FiPenTool />}
          label="Design"
          text="Lorem ipsum, dolor sit amet consectetur .dolor sit amet consectetur elit adipisicing"
        />

        <Card
          label="Finance"
          bgColor="#EAF2F3"
          color="#a0c3c7"
          icon={<FaMoneyBillWave />}
          text="Lorem ipsum, dolor sit amet consectetur .dolor sit amet consectetur elit adipisicing"
        />
        <Card
          bgColor="#F9F3EB"
          color="#DEBFAA"
          label="Business development"
          icon={<MdBusiness />}
          text="Lorem ipsum, dolor sit amet consectetur .dolor "
        />
        <Card
          bgColor="#f3e7e6"
          color="#bd9f9b"
          icon={<GoBrowser />}
          label="Devolper"
          text="Lorem ipsum, dolor sit amet consectetur .dolor sit amet consectetur elit adipisicing"
        />
      </Slider>
    </div>
  );
};
