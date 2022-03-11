import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { RiPlantFill } from 'react-icons/ri';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <RiPlantFill size="3rem" /> <span></span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Products</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Shop</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Us</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://google.com">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
