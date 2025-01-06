import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { FaQuoteLeft, FaQuoteRight, FaXTwitter } from "react-icons/fa6";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newQuote, setNewQuote] = useState({});

  const colors = [
    "#4e7b61",
    "#4e7b53",
    "#7b7a4e",
    "#7b674e",
    "#7b4e4e",
    "#4e7b78",
    "#4e697b",
    "#4e537b",
    "#584e7b",
    "#6f4e7b",
    "#7b4e70",
    "#7b4e52",
    "#4e7b61",
    "#4e7b53",
    "#7b7a4e",
    "#7b674e",
    "#7b4e4e",
    "#4e7b78",
    "#4e697b",
    "#4e537b",
    "#584e7b",
    "#6f4e7b",
    "#7b4e70",
    "#7b4e52",
  ];

  const fetchQuotes = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/quotes");
      console.log("Response Status:", res.status);
      const data = await res.data.quotes;
      setQuotes(data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  if (isLoading) {
    return <div>Loading quotes...</div>;
  }
  if (!quotes || quotes.length === 0) {
    return <div>No quotes found.</div>;
  }

  if (Object.keys(newQuote).length === 0) {
    setNewQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  const handleRandomeQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setNewQuote(quotes[random]);
  };
  console.log(quotes);
  return (
    <div
      id="quote-box"
      className=" d-flex align-items-center"
      style={{
        backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`,
        margin: "0 auto",
        width: "700px",
        height: "500px",
      }}
    >
      <div
        className="container w-100 h-100 d-flex align-items-center justify-content-center position-relative overflow-hidden"
        style={{ maxWidth: "600px", maxHeight: "500px", margin: "0 auto" }}
      >
        <div className=" d-flex flex-column bg-white bg-opacity-50 h-75 p-4 justify-content-between z-1">
          <div className=" ">
            <FaQuoteLeft />
            <span id="text" className=" px-1 h3 ">
              {newQuote.quote}
            </span>
            <FaQuoteRight />
          </div>
          <div className="d-flex justify-content-end">
            <span id="author" className="">
              -{newQuote.author}
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <a
              id="tweet-quote"
              href="twitter.com/intent/tweet"
              className="btn btn-primary d-flex align-items-center justify-content-center bg-black border-0"
            >
              <FaXTwitter />
            </a>
            <button
              onClick={handleRandomeQuote}
              className="btn"
              id="new-quote"
              style={{ backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}` }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
