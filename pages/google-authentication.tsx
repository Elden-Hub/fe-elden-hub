import React from "react";
import { useMutation } from "@apollo/client";
import { googleAuthMutation } from "gql";
import { useRouter } from "next/router";
import Router from "next/router";
import { Text } from "sriracha-ui";

export default function GoogleAuthentication() {
  const router = useRouter();
  const code = router?.query?.code;
  const [googleSignIn, { data, loading }] = useMutation(googleAuthMutation);

  React.useEffect(() => {
    console.log(code);
    googleSignIn({
      variables: {
        code,
      },
      // refetchQueries: [{ query: isLoggedInQuery }, { query: meQuery }],
    });
  }, []);

  if (data?.googleSignIn) Router.push("/");

  if (loading)
    <div>
      <Text color="red" bg="blue" size="2rem">
        Loading...
      </Text>
    </div>;
  return (
    <div>
      <Text color="red" bg="blue" size="2rem">
        Hello, world!
      </Text>
    </div>
  );
}

// GoogleAuthentication.getInitialProps = async ({ req }: NextPageContext) => {
// const userAgent = req?.query;
// return { userAgent };
// console.log(req?.url);
// };
