import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./component/MovieList";
import Filter from "./component/Filtre";
import AddMovieModal from "./component/newFilms";
import MovieDetails from "./component/MovieDetails";
import React, { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, titre: "Fury Road", description: "Une guerrière et un mystérieux fugitif fuient un tyran avec des prisonnières.", posterURL: "/images/Fury Road.jpg", note: "8", trailerUrl:"https://www.youtube.com/watch?v=hEJnMQG9ev8" },
    { id: 2, titre: "The Matrix", description: "Un hacker découvre que son monde est une simulation dirigée par des machines.", posterURL: "/images/The Matrix.jpg", note: "9", trailerUrl:"https://www.youtube.com/watch?v=vKQi3bBA1y8" },
    { id: 3, titre: "Part One", description: "Un jeune noble embrasse son destin au cœur d'un conflit sur une planète désertique.", posterURL: "/images/Part One.jpg", note: "10", trailerUrl:"https://www.youtube.com/watch?v=2m1drlOZSDw&t=9s" },
    { id: 4, titre: "Blade Runner 2049", description: "Un policier révèle un secret menaçant l'équilibre entre humains et androïdes.", posterURL: "/images/Blade Runner 2049.jpg", note: "10", trailerUrl:"https://www.youtube.com/watch?v=gCcx85zbxz4" },
    { id: 5, titre: "Edge of Tomorrow", description: "Un soldat piégé dans une boucle temporelle doit vaincre des extraterrestres.", posterURL: "/images/Edge of Tomorrow.jpg", note: "5", trailerUrl:"https://www.youtube.com/watch?v=vw61gCe2oqI" },
    { id: 6, titre: "Çukur", description:"Çukur raconte l'histoire de Yamaç Koçoval, qui revient dans son quartier pour protéger sa famille d'un gang rival.", trailerUrl: "https://www.youtube.com/watch?v=g3GoD22e5gM", note: "10", posterURL:"/images/cukur.jpg" },
    { id: 7, titre: "The Raid", description: "Des policiers assiègent un immeuble pour capturer un baron de la drogue.", posterURL: "/images/The Raid.jpg", note: "6", trailerUrl:"https://www.youtube.com/watch?v=m6Q7KnXpNOg" },
    { id: 8, titre: "Die Hard", description: "Un policier new-yorkais affronte seul des terroristes dans un gratte-ciel.", posterURL: "/images/Die Hard.jpg", note: "9", trailerUrl:"https://www.youtube.com/watch?v=I6wRZCV7naE&t=24s" },
    { id: 9, titre: "Inception", description: "Un voleur d'informations plonge dans les rêves pour voler des secrets.", posterURL: "/images/Inception.jpg", note: "9", trailerUrl:"https://www.youtube.com/watch?v=YoHD9XEInc0" }, // Correction ici
    { id: 10, titre: "The Dark Knight", description: "Un justicier masqué affronte un criminel qui veut semer le chaos.", posterURL: "/images/The Dark Knight.jpg", note: "10", trailerUrl:"https://www.youtube.com/watch?v=EXeTwQWrcwY" },
    { id: 11, titre: "Interstellar", description: "Un film de science-fiction où un groupe d'explorateurs voyage à travers un trou de ver.", posterURL: "/images/Interstellar.jpg", note: "7", trailerUrl:"https://www.youtube.com/watch?v=zSWdZVtXT7E" },
    { id: 12, titre: "John Wick", description: "Un ancien tueur à gages reprend les armes pour se venger.", posterURL: "/images/John Wick.jpg", note: "10", trailerUrl:"https://www.youtube.com/watch?v=2AUmvWm5ZDQ" },
    { id: 13, titre: "Valhalla Rising", description: "Un guerrier muet en quête de liberté dans un voyage mystique.", posterURL: "/images/Valhalla Rising.jpg", note: "8", trailerUrl:"https://www.youtube.com/watch?v=RrAz1YLh8nY" },
    { id: 14, titre: "Vikings puster", description: "L'histoire du prince Vladimir de Kiev qui tente de réunifier la Russie.", posterURL: "/images/Vikings puster.webp", note: "10", trailerUrl:"https://www.youtube.com/watch?v=Yi4YnwFT7Gk" },
  ]);

  const [filter, setFilter] = useState({ titre: "", note: 0 });
  const [visible, setVisible] = useState(false);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: movies.length + 1, note: Number(movie.note) }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.titre.toLowerCase().includes(filter.titre.toLowerCase()) &&
      movie.note >= filter.note
  );

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Movies</h1>

        <Routes>
          <Route path="/" element={
            <>
              <div className="flex justify-between items-center mb-4">
                <Filter filter={filter} setFilter={setFilter} />
              </div>
              <AddMovieModal visible={visible} setVisible={setVisible} addMovie={addMovie} />
              <MovieList movies={filteredMovies} />
            </>
          } />
          
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
