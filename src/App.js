import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from '@material-ui/core/Container';

import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import "./App.css";

function App() {
    const [category, setCategory] = useState("general");
    const [newsArray, setnewsArray] = useState([]);
    const [resultsArray, setResultsArray] = useState();

    const newsApi = async () => {
        try {
            const news = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=6879f37d01ba46519231cc7570d616b4`
            );
            setnewsArray(news.data.articles);
            setResultsArray(news.data.totalResults);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(newsArray);

    useEffect((e) => {
        newsApi()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultsArray, category, newsArray]);

    return (
      <div>
        <Navbar setCategory={setCategory} />
        <Container className="container" maxWidth="md">
          <Content newsArray={newsArray} />
        </Container>
    </div>
    );
}

export default App;