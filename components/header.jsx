import React from "react";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="HeaderContainer">
      <Container className="headerFlexBox">
        <div className="title" onClick={() => router.push("/")}>
          Info<span className="titleSpan">Motive</span>
        </div>
        <ul className="navItems">
          <li className="item">About</li>
          <li className="item">Contact Us</li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
