import React from "react";
import { Card, Input, Button, Text } from "sriracha-ui";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { isLoggedInQuery, registerMutation, meQuery } from "gql";
import googleLoginLink from "./helper";
import { addProfilePictureMutation } from "gql/mutations/profilePic";

export default function Register({ toggle }: any) {
  const { register: formRegister, handleSubmit } = useForm();
  const [register, { loading }] = useMutation(registerMutation);
  const [addProfilePicture] = useMutation(addProfilePictureMutation);
  const onSubmit = async (data: Record<string, any>) => {
    console.log("data:", data);
    const { firstName, lastName, email, password } = data;

    await register({
      variables: {
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      },
      refetchQueries: [{ query: isLoggedInQuery }, { query: meQuery }],
    });
    toggle();
  };
  const selectImageHandler = async (e: any) => {
    console.log("event target file:", e.target.files[0]);
    try {
      const { data } = await addProfilePicture({
        variables: {
          picture: e.target.files[0],
        },
      });
      console.log("DATA:", data);
    } catch (err) {
      console.log("ERROR:", err.message);
    }
  };

  if (loading) return <Text>Loading...</Text>;
  return (
    <Card as="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        type="text"
        placeholder="Email..."
        ref={formRegister}
      />
      <Input
        name="firstName"
        type="text"
        placeholder="First name..."
        ref={formRegister}
      />
      <Input
        name="lastName"
        type="text"
        placeholder="Last name..."
        ref={formRegister}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password..."
        ref={formRegister}
      />
      <Input
        name="avatar"
        type="file"
        ref={formRegister}
        onChange={selectImageHandler}
      />
      <Button type="submit" primary>
        Register
      </Button>
      <Button as="a" href={googleLoginLink} primary>
        Sign up with Google!
      </Button>
    </Card>
  );
}
