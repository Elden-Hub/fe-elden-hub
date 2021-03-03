import React from "react";
import { Flex, Button, Text, useModal, Modal } from "sriracha-ui";
import { useQuery } from "@apollo/client";
import CurrentUser from "./CurrentUser";
import { isLoggedInQuery } from "gql";
import Login from "common/Auth/Login";
import Register from "common/Auth/Register";

export default function Gate() {
  const { data: isLoggedInData, loading } = useQuery(isLoggedInQuery);

  const { isModal: isLoginModal, toggleModal: toggleLoginModal } = useModal();
  const {
    isModal: isRegisterModal,
    toggleModal: toggleRegisterModal,
  } = useModal();

  const status = isLoggedInData?.isLoggedIn;

  return (
    <Flex aic>
      {loading ? (
        <Text>Loading...</Text>
      ) : !status ? (
        <>
          <Button green onClick={toggleLoginModal}>
            Log in
          </Button>
          <Button blue onClick={toggleRegisterModal}>
            Sign up
          </Button>
        </>
      ) : (
        <CurrentUser />
      )}
      <Modal active={isLoginModal} toggle={toggleLoginModal}>
        <Login toggle={toggleLoginModal} />
      </Modal>
      <Modal active={isRegisterModal} toggle={toggleRegisterModal}>
        <Register toggle={toggleRegisterModal} />
      </Modal>
    </Flex>
  );
}
