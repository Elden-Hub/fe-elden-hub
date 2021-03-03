import Link from "next/link";
import Layout from "common/Layout";
import { Card, Text } from "sriracha-ui";

export default function Index() {
  return (
    <Layout title="Home">
      <Card w="94%" maxW="88rem" shade>
        <Text xlf bold as="h1">
          Welcome to the Artisans Platform! 🎉
        </Text>
        <Link href="/about" passHref>
          <Text as="a" color="deepPurple4" pointer hvrColor="deepPurple3">
            About
          </Text>
        </Link>
      </Card>
    </Layout>
  );
}
