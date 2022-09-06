import axios from "axios";
class ArticleService {
  static articles = async () => {
    try {
      const reponse = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4e126bbb054a4c5bad2fa29cd48bab59"
      );

      const data = await reponse.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export default ArticleService;
