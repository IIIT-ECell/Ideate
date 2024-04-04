import React from "react";
import Image from "next/image";
import sampleImage from "@/assets/sample.jpg";

interface CardsProps {
  title: string;
  description: string;
  tags: string[];
}

const Cards: React.FC<CardsProps> = ({ title, description, tags }) => {
  return (
    <div className="max-w-sm rounded-xl h-[36rem] transition-all mr-8 mt-8 bg-opacity-20 bg-slate-900 hover:bg-opacity-60 hover:transform hover:scale-105 hover:translate-y-1 hover:neon-slate">
      <Image
        className="h-2/6 w-full text-lg rounded-md"
        src={sampleImage}
        alt={title}
      />
      <div className="h-3/6 px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base line-clamp-[10]">{description}</p>
      </div>
      <div className="h-1/6 px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Cards;
