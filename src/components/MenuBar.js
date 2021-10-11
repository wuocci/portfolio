import * as React from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import styled from "styled-components";

const MenuBar = () => {
  let history = useHistory();

  const StyledButton = styled.button`
    position: relative;
    display: inline-block;
    margin-left: 15px;
    font-size: 16px;
    padding: 5px 11px 5px 15px;
    text-decoration: none;
    color: #ffffff;
    transition: 0.4s;
    background: transparent;
    border: none;
    &:before {
      position: absolute;
      display: inline-block;
      content: "";
      width: 2px;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 3px;
      background: #e87e04;
    }
    &:after {
      position: absolute;
      display: inline-block;
      content: "";
      width: 2px;
      height: 100%;
      top: 0;
      left: 100%;
      border-radius: 3px;
      background: #e87e04;
    }
    &:hover:before {
     v -webkit-transform: rotate(10deg);
     -ms-transform: rotate(10deg);
     transform: rotate(10deg);
     
    }
    &:hover:after {
      v -webkit-transform: rotate(10deg);
      -ms-transform: rotate(10deg);
      transform: rotate(10deg);
     }
     &:hover{
       cursor:pointer;
       color: #e87e04;
     }
    &:focus {
    }
  `;

  return (
    <Box className="appbar">
      <StyledButton onClick={() => history.push("/")}>home</StyledButton>
      <StyledButton onClick={() => history.push("/projects")}>
        projects
      </StyledButton>
      <StyledButton onClick={() => history.push("/about")}>about</StyledButton>
    </Box>
  );
};

export default MenuBar;
