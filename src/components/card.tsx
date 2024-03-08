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
    <div className="max-w-sm rounded-xl overflow-hidden transition-all shadow-lg m-4 bg-slate-900 hover:transform hover:scale-105 hover:translate-y-1 hover:drop-shadow-[0px_60px_40px_rgba(30,40,60,1.0)]">
      <Image
        className="w-full text-lg rounded-md"
        src={sampleImage}
        alt={title}
        width="10"
        height="10"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-white-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
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
