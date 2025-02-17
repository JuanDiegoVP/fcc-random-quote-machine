import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import PropTypes from "prop-types";

export const Quote = ({ newQuote }) => {
  return (
    <div>
      <FaQuoteLeft />
      <span id="text" className={`px-1 h5`}>
        {newQuote.quote}
      </span>
      <FaQuoteRight />
    </div>
  );
};

Quote.propTypes = {
  newQuote: PropTypes.object,
};
