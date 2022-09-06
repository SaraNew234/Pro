import React, { useState, useEffect } from "react";
import {
  StyledStory,
  StyledStoryContainer,
  StyledArticleConatiner,
  StyledArticleInfo,
  StyledArticle,
} from "./style";
import { Article } from "../Article/index";
import ArticleService from "../../services/articles.service";
import Ellipse from "../../assets/icons/ellipse.svg";
export function Story() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    ArticleService.articles().then((data) => {
      setArticles(data?.articles);
    });
  }, []);
  return (
    <StyledStory>
      <h4>HOW IT ALL BEGAN</h4>
      <h1>Our Story</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
        purus pharetra magna tempor egestas non id massa. Donec tristique dui
        vel mauris ullamcorper finibus. Curabitur maximus, sapien nec congue
        pellentesque, purus est iaculis mauris, vel sagittis enim magna at erat.
      </p>
      <StyledStoryContainer>
        {articles?.map((item, index) => {
          return (
            <ArticleConatiner
              key={index}
              desc={item.title}
              src={item.urlToImage}
              toleft={index % 2 == 0 ? false : true}
              date={item.publishedAt}
            />
          );
        })}
      </StyledStoryContainer>
    </StyledStory>
  );
}
export function ArticleConatiner({ toleft, desc, src, date }) {
  return (
    <StyledArticleConatiner toleft={toleft}>
      <StyledArticleInfo toleft={toleft}>
        <span>{new Date(date).getFullYear()}</span>
        <Ellipse />
        <StyledArticle toleft={toleft}>
          <Article color={""} desc={desc} src={src} />
        </StyledArticle>
      </StyledArticleInfo>
    </StyledArticleConatiner>
  );
}
