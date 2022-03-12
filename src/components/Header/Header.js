import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { RiPlantFill } from 'react-icons/ri';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: 20 }}>
          <RiPlantFill size="3rem" />
          <Span style={{marginLeft: 5}} >Relax with us</Span>
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
      <SocialIcons href="https://facebook.com">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
