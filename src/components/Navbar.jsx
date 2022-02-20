import React, { useContext } from "react";
import { S_Container } from "../styled/S_Container";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const S_Wrapper = styled.section`
  padding: 20px;
  background: #61dafb;
`;
const S_Logo = styled(Link)`
  cursor: pointer;
  padding: 5px;
  color: #fff;
`;
const S_Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const S_Link = styled(Link)`
  padding: 7px 20px;
  border-radius: 5px;
  margin-left: 40px;
  border: 2px solid #fff;
`;
const S_Button = styled.button`
  padding: 7px 20px;
  border-radius: 5px;
  margin-left: 40px;
  border: 2px solid #fff;
`;
function Navbar() {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <S_Wrapper>
      <S_Container>
        <S_Inner>
          <S_Logo to="/">React App</S_Logo>
          <div>
            {user && <S_Link to="/me">Профиль</S_Link>}
            <S_Button
              onClick={user ? () => alert("Logout") : () => navigate("/login")}
            >
              {user ? "Выйти" : "Войти"}
            </S_Button>
          </div>
        </S_Inner>
      </S_Container>
    </S_Wrapper>
  );
}

export default Navbar;
