// import { data } from "autoprefixer";

const generateRandomQuote = (content, author) => {
      fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => {
                  content.textContent = data.content;
                  author.textContent = data.author;
            })
            .catch((err) => console.error(err));
};

export default generateRandomQuote;
