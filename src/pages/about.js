
import { AboutInfo } from "../components/AboutInfo";
import { AboutIntro } from "../components/AboutIntro";
import { Features } from "../components/Feature";
import { MissionVision } from "../components/MissionVision";
import Footer from "../components/shared/Footer/index";
import { SEO } from "../components/shared/SEO/index";
import { Layout } from "../components/shared/Layout/index";
import { Story } from "../components/Story";
import ArticleService from '../services/articles.service'
export default function About({data}) {
  return (
    <>
      <Layout>
        <SEO title="About" />
        <AboutIntro />
        <AboutInfo />
        <Features />
        <MissionVision />
        <Story data={data.articles}/>
        <Footer />
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  let datas= await ArticleService.articles()
   return {
     props: {
       data:datas
      
     },
   };
 }