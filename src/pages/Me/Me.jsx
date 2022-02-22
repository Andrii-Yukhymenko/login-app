import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validationSchema";
import styled from "styled-components";
import { S_Container } from "../../styled/S_Container";
import API from "../../API";
import Cookies from "js-cookie";

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
`;
const S_Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
`;

function Me() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  let [userData, setUserData] = useState({});
  let [loading, setLoading] = useState(true);
  useEffect(async () => {
    setLoading(true);
    API.getUserData(Cookies.get("user")).then((response) => {
      setUserData(response.data);
    });
    setLoading(false);
  }, []);

  return (
    <S_Wrapper>
      <S_Container>
        <S_Title>Изменить данные</S_Title>
        {!loading ? (
          <>
            <p>{userData.email}</p>
            <p>{userData.firstName}</p>
            <p>{userData.lastName}</p>
            <S_Form onSubmit={handleSubmit(onSubmit)}>
              <label>
                <S_Label>Email</S_Label>
                <S_Input {...register("email")} />
                <S_InputError>{errors.email?.message}</S_InputError>
              </label>
              <label>
                <S_Label>First name</S_Label>
                <S_Input {...register("firstName")} />
                <S_InputError>{errors.firstName?.message}</S_InputError>
              </label>
              <label>
                <S_Label>Last name</S_Label>
                <S_Input {...register("lastName")} />
                <S_InputError>{errors.lastName?.message}</S_InputError>
              </label>
              <label>
                <S_Label>Password</S_Label>
                <S_Input {...register("password")} />
                <S_InputError>{errors.password?.message}</S_InputError>
              </label>
              <label>
                <S_Label>Password confirmation</S_Label>
                <S_Input
                  type="password"
                  {...register("passwordConfirmation")}
                />
                <S_InputError>
                  {errors.passwordConfirmation?.message}
                </S_InputError>
              </label>
              <S_Button type="submit">Подтвердить</S_Button>
            </S_Form>
          </>
        ) : (
          <p>loading</p>
        )}
      </S_Container>
    </S_Wrapper>
  );
}
export default Me;
