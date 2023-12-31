import styled from "styled-components";
import * as S from "../../styles/News/NewsList-style";
import { useLikedArticles } from "../../context/LikedArticlesContext";

const LikeNewsContainer = styled.div`
  flex-direction: row;
  justify-content: center;
`;

const NewsItem = styled.div`
  margin: 2rem 0;
  border: 1px solid lightgray;
  border-radius: 1rem 1rem;
  padding: 1rem 1rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);

  h2 {
    margin: 0;
    font-size: 1.2rem;
    a {
      color: #0291db;
      text-decoration: none;
    }
  }
  p {
    line-height: 1.5;
    font-size: 1rem;
    margin-top: 1rem;
    white-space: normal;
  }
`;

const NoLikedNews = styled.p`
  font-size: 1.2rem;
  color: red;
  margin-top: 2rem;
`;

const LikeNews = () => {
  const { likedArticles } = useLikedArticles();

  if (likedArticles.length === 0) {
    return <NoLikedNews>찜한 뉴스가 없습니다.</NoLikedNews>;
  }

  return (
    <S.NewsListBlock>
      <LikeNewsContainer>
        {likedArticles.map((article) => (
          <NewsItem key={article.id}>
            <h2>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
          </NewsItem>
        ))}
      </LikeNewsContainer>
    </S.NewsListBlock>
  );
};

export default LikeNews;
