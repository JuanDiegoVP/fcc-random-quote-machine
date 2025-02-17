import axios from "axios";
import { useEffect, useState } from "react";
import { Quote } from "./components/Quote";
import { QuoteAuthor } from "./components/QuoteAuthor";
import { colors } from "./lib/colors";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newQuote, setNewQuote] = useState({});
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

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
    return <div className="">Loading quotes...</div>;
  }
  if (!quotes || quotes.length === 0) {
    return <div>No quotes found.</div>;
  }

  if (Object.keys(newQuote).length === 0) {
    setNewQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  const handleRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setNewQuote(quotes[random]);
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  console.log(quotes);

  return (
    <div
      id="quote-box"
      className=" d-flex align-items-center justify-content-center vw-100 vh-100"
      style={{
        backgroundColor: `${randomColor}`,
      }}
    >
      <div className="col-8 h-75 h-sm-75 col-lg-6 d-flex flex-column bg-white bg-opacity-50 p-lg-5 p-md-4 p-sm-3 p-1 z-1 justify-content-between">
        <Quote newQuote={newQuote} />
        <div className="d-flex flex-column gap-5">
          <QuoteAuthor newQuote={newQuote} />
          <div className="d-flex  justify-content-between">
            <a
              id="tweet-quote"
              href="twitter.com/intent/tweet"
              className="btn btn-primary d-flex align-items-center justify-content-center bg-black border-0"
            >
              <FaXTwitter />
            </a>
            <button
              onClick={handleRandomQuote}
              className="btn"
              id="new-quote"
              style={{
                backgroundColor: `${randomColor}`,
              }}
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
