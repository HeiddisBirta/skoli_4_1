import { useState } from "react";

interface Props {
  title: string;
}

function Card({ title }: Props) {
  const [photoVisible, setPhotoVisible] = useState(false);
  return (
    <div className=" flex flex-col justify-center">
      <h1 className="text-center p-6">{title}</h1>
      {photoVisible ? (
        <img
          src="https://images.pexels.com/photos/250716/pexels-photo-250716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="lots of tulips in every color"
        ></img>
      ) : (
        <img
          src="https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="flowers, pink backround"
        />
      )}
      <button
        className="m-4 bg-pink-400 text-blue-700 "
        onClick={() =>
          photoVisible ? setPhotoVisible(false) : setPhotoVisible(true)
        }
      >
        Click me for more flowers!
      </button>
    </div>
  );
}

export default Card;
