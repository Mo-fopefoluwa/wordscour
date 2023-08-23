import React from "react";

const Content = ({ partOfSpeech, definitions, synonyms }) => {
  return (
    <div>
      <div className="my-3">
        <div className="flex flex-row items-center text-lg font-bold font-serif dark:text-white">
          <p>{partOfSpeech}</p>
          <hr className="w-full ml-10" />
        </div>
        <div className="text-left ">
          <p className="text-gray-800 dark:text-gray-500 mt-3 font-semibold">
            Meaning
          </p>
          <ul className="list-disc px-10 text-gray-800 dark:text-gray-500 text-sm space-y-2">
            {definitions.map((def, index) => (
              <li key={index}>{def.definition}</li>
            ))}
          </ul>
          <p className="text-gray-800 dark:text-gray-500 mt-6 font-semibold">
            Example
          </p>
          <ul className="list-disc px-10 mt-2 text-gray-800 dark:text-gray-500 text-sm space-y-2">
            {definitions.map((defs, index) => (
              <li key={index}>{defs.example}</li>
            ))}
          </ul>
          <p className="mt-4 text-gray-800 text-sm font-semibold">
            Synonyms:{" "}
            <span className="text-indigo-500 flex flex-row gap-4 mt-2">
              {synonyms.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
