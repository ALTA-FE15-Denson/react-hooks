import React, {FC} from 'react'

interface CardProps {
  id: number;
  image: string;
  mode: boolean;
  onClick: (id: number) => void;
}
const Card: FC<CardProps> = ({
  id, image, mode, onClick
}) => {
  return (
    <button
        onClick={() => onClick(id)}
        className={`p-0 transition-transform overflow-hidden hover:border-none ${
          mode === true ? "border-none" : ""
        } relative`}
      >
        <div className="transition ease-in-out hover:scale-110"> 
          <img
            className="rounded-md h-full w-full object-cover p-0 transition ease-in-out delay-150 hover:scale-105"
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt=""
          />
          <div className="w-full h-full flex z-99 absolute bottom-0 opacity-0 transition-opacity duration-300 hover:opacity-70 bg-black ">
            <img
              src="../../../public/play-button.png"
              alt=""
              className="m-auto z-100 w-12 h-12"
            />
          </div>
        </div>
      </button>
  )
}

export default Card