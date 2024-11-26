import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <h1 className="movie-list-title">Movie  List Section</h1>
      <section className="movie-list-section">
        {
          movies.map((item, index) => {
            return <div key={index} className="movie-item">
                      <div><img src={item.image} alt={`${item.title} Poster`} /></div>
                      <div className="movie-detail">
                        <h2>Title: {item.title}</h2>
                        <p>Director: {item.director}</p>
                        <p>Year: {item.year}</p>
                        <p>Runtime: {item.runtime}</p>
                        <p>Genres:
                          {item.genres.map((item, index) => {
                            return <span key={index} className="movie-genre">{item}</span>
                          })}
                        </p>
                        <p>IMDB Ratings: {item.imdbRating || "N/A"}</p>
                        <p>IMDB Votes: {item.imdbVotes || "N/A"}</p>
                      </div>
            </div>
          })
        }
      </section>
    </div>
  );
}

export default App;
