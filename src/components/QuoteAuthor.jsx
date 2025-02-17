import PropTypes from "prop-types";

export const QuoteAuthor = ({ newQuote }) => {
  return (
    <div className="d-flex justify-content-end">
      <span id="author">-{newQuote.author}</span>
    </div>
  );
};

QuoteAuthor.propTypes = {
  newQuote: PropTypes.object,
};
