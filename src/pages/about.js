
import { AboutInfo } from "../components/AboutInfo";
import { AboutIntro } from "../components/AboutIntro";
import { Features } from "../components/Feature";
import { MissionVision } from "../components/MissionVision";
import Footer from "../components/shared/Footer/index";
import { SEO } from "../components/shared/SEO/index";
import { Layout } from "../components/shared/Layout/index";
import { Story } from "../components/Story";
export default function About() {
  return (
    <>
      <Layout>
        <SEO title="About" />
        <AboutIntro />
        <AboutInfo />
        <Features />
        <MissionVision />
        <Story />
        <Footer />
      </Layout>
    </>
  );
}
