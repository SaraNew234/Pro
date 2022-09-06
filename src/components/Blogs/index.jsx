import React,{useState,useEffect}from "react";
import { StyledBlog, StyledArticle, StyledBlogContainer } from "./style";

import { Article } from "../Article";
import ArticleService from '../../services/articles.service'
export function Blog() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
   
      ArticleService.articles().then((data)=>{
        setArticles(data?.articles)
      })
 
   
  }, [])
 
  return (
    <StyledBlog>
      <p>STAY INFORMED</p>
      <h1>News & Blogs</h1>
      <StyledBlogContainer>
        {
          articles?.map((item,index)=>{
            return <Article key={index}
            color={index==1?"#810102":""}
            desc={item.title}
            src={item.urlToImage}

            />
          })
        }
       

       
      </StyledBlogContainer>
    </StyledBlog>
  );
}
