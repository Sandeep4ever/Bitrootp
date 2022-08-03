import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    );
    if (response && response.data && response.data.length > 0) {
      setPosts(response.data);
    }
  };

  return (
    <div className="App">
      <div className="main_container">
        <div className="custom_row">
          <div className="column_50_percent">
            {posts.map((post, index) => {
              return (
                <Card
                  key={index}
                  cardObject={post}
                  posts={posts}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
