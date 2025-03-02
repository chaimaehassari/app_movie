import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-row w-[30rem] bg-white shadow-md rounded-lg overflow-hidden mb-4 p-4 gap-[5rem] ">
    <img 
   style={{ width: "140px", height: "180px", objectFit: "cover", minWidth: "140px", minHeight: "180px" }}  
  src={movie.posterURL} 
  alt={movie.titre} 
/>

<div className="p-4 flex flex-col justify-between">
<h3 className="text-xl font-bold text-color-black">Titre: {movie.titre}</h3>
<p className="flex-grow my-2">Description: {movie.description}</p>
<p className="text-base font-bold text-gray-800">Note: {movie.note}</p>

      </div>
    </div>
    

  );
};

export default MovieCard;