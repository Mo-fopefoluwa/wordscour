import React from "react";

const Heading = ({ results }) => {
  const { word, phonetics } = results;
  //const ref = useRef();

  const playAudio = () => {
    try {
      let audio = new Audio(phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between my-5">
        <div>
          <h3 className="font-bold text-3xl font-serif capitalize dark:text-white">
            {word}
          </h3>
          <span className="block font-normal text-sm text-indigo-600 ">
            {" "}
            {phonetics[0].text}
          </span>
        </div>
        <button
          onClick={playAudio}
          className="bg-indigo-300 h-12 w-12 rounded-full text-[2rem]"
        >
          <i class="bx bx-play"></i>
        </button>

        {/* <audio className="hidden" ref={ref} src={audio} /> */}
      </div>
    </div>
  );
};

export default Heading;
