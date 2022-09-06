import React, { useState } from "react";
import {
  StyledCustomers,
  StyledCustomersContanier,
  StyledCustomer,
  StyledIcon,
  StyledCustomerImage,
} from "./style";

import Quote from "../../assets/icons/quote.svg";
import Left from "../../assets/icons/left.svg";
import Right from "../../assets/icons/right.svg";
export function Customers() {
  const customers = [
    {
      img: "./images/avatar1.jpg",
      name: "Abebech Derara",
    },
    {
      img: "./images/avatar2.jpg",
      name: " Michelle Toh",
    },
    {
      img: "./images/avatar3.jpg",
      name: "Stephen M. Lepore",
    },
    {
      img: "./images/avatar4.jpg",
      name: "Jenni Reid",
    },
    {
      img: "./images/avatar5.jpg",
      name: "Elsie Boskamp",
    },
    {
      img: "./images/avatar6.jpg",
      name: "Holly Ellyatt",
    },
    {
      img: "./images/avatar7.jpg",
      name: "Ken Martin",
    },
  ];
  const [initial, setInitial] = useState(0);
  const [current, setCurrent] = useState(initial);
  const length = customers.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(customers) || customers.length <= 0) {
    return null;
  }
  return (
    <StyledCustomers>
      <Quote />
      <h4>Thousands of satisfied users around the globe</h4>
      <p>
        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
        purus pharetra magna tempor egestas non id massa. ”
      </p>
      <StyledCustomersContanier>
        <StyledIcon onClick={prevSlide}>
          <Left />
          <span>PREV</span>
        </StyledIcon>
        {customers.map((item, index) => {
          return (
            <>
              {index === current && (
                <Customer src={item.img} name={item.name} />
              )}
            </>
          );
        })}
        <StyledIcon onClick={nextSlide}>
          <Right />
          <span>NEXT</span>
        </StyledIcon>
      </StyledCustomersContanier>
    </StyledCustomers>
  );
}
export function Customer({ src, name }) {
  return (
    <StyledCustomer>
      <StyledCustomerImage>
        <img src={src} alt="" />
      </StyledCustomerImage>
      <h3>{name}</h3>
      <p>Customer</p>
    </StyledCustomer>
  );
}
