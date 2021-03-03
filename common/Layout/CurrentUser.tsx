import React from "react";
import { Flex, Box, Text, Tooltip, Button, Card } from "sriracha-ui";
import { useQuery, useMutation } from "@apollo/client";
import { logoutMutation, meQuery, isLoggedInQuery } from "gql";

export default function CurrentUser() {
  const { data: meData, loading } = useQuery(meQuery);
  const [logout] = useMutation(logoutMutation);
  return (
    <Flex aic>
      {loading ? (
        <Text lf>Loading...</Text>
      ) : (
        <>
          <Text size="2rem">{meData?.me?.displayName}</Text>
          <Tooltip ttTop="3.8rem" ttRight="1.4rem">
            <Box sqr="4rem" circle m="0 1.6rem">
              <img
                src={meData?.me?.avatar}
                alt="avatar"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <div className="tooltip">
              <Card invert>
                <Button
                  red
                  onClick={() => {
                    logout({
                      refetchQueries: [{ query: isLoggedInQuery }],
                    });
                  }}
                >
                  Logout
                </Button>
              </Card>
            </div>
          </Tooltip>
        </>
      )}
    </Flex>
  );
}
