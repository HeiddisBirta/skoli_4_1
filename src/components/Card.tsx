import React, { ReactNode } from "react";

interface Props {
  title: string;
}

function Card({ title }: Props) {
  return (
    <div>
      <h1 className="text-center p-6">{title}</h1>
      <img
        src="https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="flowers, pink backround"
      />
    </div>
  );
}

export default Card;
