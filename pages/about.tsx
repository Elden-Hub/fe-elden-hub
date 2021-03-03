import Layout from "common/Layout";
import { Card, Text } from "sriracha-ui";

export default function About() {
  return (
    <Layout title="About">
      <Card w="94%" maxW="88rem" shade>
        <Text as="h2" xlf bold>
          Our Mission 🚀
        </Text>
        <Text lf>
          There is an incredible amount of untapped talent out there. These
          days, mastering your craft is the easy part. It's marketing yourself
          and getting your product in front of the right people that's the hard
          part. <br />
          <br />
          The Artisans Platform is a place where anybody with a craft can add
          their products and be seen. The Artisans Platform will also offer
          services to further enhance and help artisans with expert-level
          marketing plans and strategies to make sure their goods and services
          are seen, clicked, and bought by a large, targeted audience. <br />
          <br />
          The Artisans Platform aims to build a healthy community to offer help
          and encouragement to all new artisans. The power of our community will
          help facilitate networking and growth for all of our artisans.
        </Text>
      </Card>
    </Layout>
  );
}
