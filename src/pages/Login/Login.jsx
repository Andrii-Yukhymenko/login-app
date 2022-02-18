import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validationSchema";
import styled from "styled-components";
import { S_Container } from "../../styled/S_Container";

const S_Wrapper = styled.section`
  margin: 50px 0 0 0;
`;

const S_Form = styled.form`
  margin: 0 auto;
  max-width: 400px;
  background: #61dafb;
  padding: 20px;
  border-radius: 10px;
`;
const S_Input = styled.input`
  margin: 0 0 10px 0;
  height: 40px;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
`;
const S_InputError = styled.p`
  margin: 0 0 20px 0;
  font-size: 15px;
  color: black;
`;
const S_Label = styled.p`
  color: black;
  margin: 0 0 10px 0;
`;
const S_Title = styled.h1`
  font-size: 23px;
  margin: 0 0 30px 0;
  text-align: center;
`
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <S_Wrapper>
      <S_Container>
        <S_Title>Войти в аккаунт</S_Title>
        <S_Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <S_Label>Login</S_Label>
            <S_Input {...register("firstName")} />
            <S_InputError>{errors.firstName?.message}</S_InputError>
          </label>
          <label>
            <S_Label>Passwor</S_Label>
            <S_Input {...register("age")} />
            <S_InputError>{errors.age?.message}</S_InputError>
          </label>
          <input type="submit" />
        </S_Form>
      </S_Container>
    </S_Wrapper>
  );
}

export default Login;
