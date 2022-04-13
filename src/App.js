import NavBarNews from "./Component/NavBarNews";
import logo from "./logo.svg";
import categories from "./Component/Category";
import React, { useEffect, useState } from "react";
import NewsContent from "./NewsComponent/NewsContent";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const apiKey = "cec7d4b0ca8c4f12861db30bde214869";

  const newsApi = async () => {
    try {
      const response =
        await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${loadmore}&apiKey=${apiKey}


      `);
      const data = await response.json();

      setNewsArray(data.articles);
      setNewsResults(data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadmore]);
  return (
    <div className="App">
      <NavBarNews setCategory={setCategory} />

      <NewsContent
        loadmore={loadmore}
        setLoadmore={setLoadmore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
      <Footer />
    </div>
  );
}

export default App;
