import Footer from "../components/shared/Footer/index";
import { Projects } from "../components/Projects/index";
import { Layout } from "../components/shared/Layout/index";
import { Logos } from "../components/Logos";
import { SEO } from "../components/shared/SEO/index";
import { Publications } from "../components/Publications";
import { Blog } from "../components/Blogs";
import { HomeIntro } from "../components/HomeIntro";
import { AboutUs } from "../components/AboutUs";
import { Customers } from "../components/Customers/index";
export default function Home() {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <HomeIntro />
        <Projects />
        <AboutUs />
        <Publications />
        <Customers />
        <Blog />
        <Logos />
        <Footer />
      </Layout>
    </>
  );
}
