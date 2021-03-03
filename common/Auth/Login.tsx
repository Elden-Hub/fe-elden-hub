import React from "react";
import { Card, Input, Button } from "sriracha-ui";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { isLoggedInQuery, loginMutation, meQuery } from "gql";
import googleLoginLink from "./helper";

export default function Login({ toggle }: any) {
  const { register, handleSubmit } = useForm();

  const [login] = useMutation(loginMutation);

  const onSubmit = async (data: Record<string, any>) => {
    console.log("data:", data);
    const { email, password } = data;

    await login({
      variables: {
        data: {
          email,
          password,
        },
      },
      refetchQueries: [{ query: isLoggedInQuery }, { query: meQuery }],
    });
    toggle();
  };
  return (
    <Card as="form" onSubmit={handleSubmit(onSubmit)}>
      <Input name="email" type="text" placeholder="Email..." ref={register} />
      <Input
        name="password"
        type="password"
        placeholder="Password..."
        ref={register}
      />
      <Button type="submit" primary>
        Log In
      </Button>
      <Button as="a" href={googleLoginLink} primary>
        Log In with Google!
      </Button>
    </Card>
  );
}
