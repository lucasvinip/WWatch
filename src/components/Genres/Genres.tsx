import React from "react";

interface GenresProps {
  genres: string;
  activeGenre: string | number;
  setActiveGenre: (genre: string | number) => void;
}

const Genres: React.FC<GenresProps> = ({ genres, activeGenre, setActiveGenre }) => {

  return (
    <span
      onClick={() => setActiveGenre(genres)}
      style={{
        transform: activeGenre === genres ? "scale(1.05)" : "",
        color: activeGenre === genres ? "rgba(217, 217, 217, 0.5)" : ""
      }}
    >
      {genres}
    </span>
  );
};

export default Genres;
