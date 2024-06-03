import { useState } from "react";

const QRSelector: React.FC = () => {
  const [selected, setSelected] = useState<1000 | 1500 | 2000 | null>(null);

  return (
    <>
      <p className="mt-8 leading-8 text-gray-600">
        PS, we run on donations, it's be great if you could donate some
      </p>
      <div className="flex flex-row gap-2 justify-center mt-2.5">
        <button
          onClick={() => setSelected((s) => (s === 1000 ? null : 1000))}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          1000
        </button>
        <button
          onClick={() => setSelected((s) => (s === 1500 ? null : 1500))}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          1500
        </button>
        <button
          onClick={() => setSelected((s) => (s === 2000 ? null : 2000))}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          2000
        </button>
      </div>
      <div className="text-center flex flex-col justify-center items-center mt-8">
        {selected === 1000 ? (
          <>
            <img src="/upi1000.png" alt="" />
            <h1>₹1000</h1>
          </>
        ) : selected === 1500 ? (
          <>
            <img src="/upi1500.png" alt="" />
            <h1>₹1500</h1>
          </>
        ) : selected === 2000 ? (
          <>
            <img src="/upi2000.png" alt="" />
            <h1>₹2000</h1>
          </>
        ) : (
          <div />
        )}
      </div>
    </>
  );
};

export default QRSelector;
