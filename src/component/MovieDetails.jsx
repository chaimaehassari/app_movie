import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <p>Film non trouvé</p>;

  const embedUrl = movie.trailerUrl.replace("watch?v=", "embed/");

  return (
    <div className="text-center">
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 absolute right-[61px] top-[55px]"
      >
        Retour à l'accueil
      </button>
      <h2 className="text-2xl font-bold">{movie.titre}</h2>
      <p className="mb-4">{movie.description}</p>
      
      {movie.trailerUrl && (
        <iframe
          className="mt-4 mx-auto"
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}

      
    </div>
  );
};

export default MovieDetails;
