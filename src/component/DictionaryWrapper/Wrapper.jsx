import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Content from "../Content/Content";

const Wrapper = () => {
  const [word, setWord] = useState("");

  const [results, setResults] = useState(null);

  const searchWord = async () => {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    const data = await response.json();

    setResults(data[0]);
  };

  console.log(results);

  return (
    <div className="container mx-auto px-10 dark:bg-black h-[100vh]">
      <nav className="my-2 h-14 flex flex-row items-center">
        <h2 className="text-indigo-700 text-2xl font-bold">WordScour</h2>
      </nav>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="w-[80%] bg-gray-100 border-none 
          outline-none rounded-lg px-3 py-4 shadow-sm"
      />
      <button
        onClick={searchWord}
        className="-mx-14 px-3 py-4 rounded-lg text-[1.2rem]"
      >
        <i class="bx bx-search"></i>
      </button>

      {results?.meanings?.length > 0 && (
        <>
          <Heading {...{ results }} />
          {results.meanings.map((content, index) => {
            return <Content {...content} key={index} />;
          })}
        </>
      )}
    </div>
  );
};

export default Wrapper;
