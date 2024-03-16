import { useState } from "react";
// import './App.css'

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-screen h-screen"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="w-fit px-4 h-fit py-4 bg-gray-700 rounded-xl shadow-2xl flex flex-wrap justify-center  items-center gap-3">
          <button onClick={() => setColor("red")} className="px-3 w-20 hover:text-black rounded-xl outline-none border-none bg-red-700">
            Red
          </button>
          <button onClick={() => setColor("green")} className="px-3 w-20 hover:text-black rounded-xl outline-none border-none bg-green-700">
            Green
          </button>
          <button onClick={() => setColor("yellow")} className="px-3 w-20 hover:text-black rounded-xl outline-none border-none bg-yellow-400">
            Yellow
          </button>
          <button onClick={() => setColor("orange")} className="px-3 w-20 hover:text-black rounded-xl outline-none border-none bg-orange-700">
            Orange
          </button>
          <button onClick={() => setColor("purple")} className="px-3 w-20 hover:text-black rounded-xl outline-none border-none bg-purple-700">
            Purple
          </button>
          <button onClick={() => setColor("blue")} className="px-3 w-20 hover:text-black rounded-xl outline-none border-none bg-blue-700">
            Blue
          </button>
          <button onClick={() => setColor("violet")} className="px-3 w-20 hover:text-black rounded-xl outline-none border-none bg-violet-700">
            Violet
          </button>
          <button onClick={() => setColor("indigo")} className="px-3 w-20 hover:text-black rounded-xl outline-none border-none bg-indigo-700">
            Indigo
          </button>
          <button onClick={() => setColor("gray")} className="px-3 w-20 hover:text-black rounded-xl outline-none border-none bg-zinc-300">
            Grey
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
