import axios from "axios";
class ArticleService {
  static articles = async () => {
    try {
      const reponse = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f548d8e311df4d718a98364ceddb3371"
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
