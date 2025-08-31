import React from "react";

interface GenresProps {
  genres: string;
}

//AÇÃO
//AÇÃO
//DRAMA
//COMÉDIA
//ROMANCE
//AVENTURA


const Genres: React.FC<GenresProps> = ({genres}) => {

  return (
    <>
      <span>
        {genres}
      </span>
    </>
  );
};

export default Genres;