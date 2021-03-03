import Head from "next/head";
import { AppContainer } from "sriracha-ui";
import { ApolloProvider } from "@apollo/client";
import withApollo from "lib/withApollo";
import "./styles.css";

const MyApp = ({ Component, pageProps, apolloClient }: any) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppContainer bg="gray3" className="app">
        <Head>
          <title>The Artisans Platform</title>
        </Head>
        <Component {...pageProps} />
      </AppContainer>
    </ApolloProvider>
  );
};

export default withApollo(MyApp);
