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
import ArticleService from '../services/articles.service'
export default function Home({data}) {
  console.log(data)
  
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <HomeIntro />
        <Projects />
        <AboutUs />
        <Publications />
        <Customers />
        <Blog data={data.articles}/>
        <Logos />
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