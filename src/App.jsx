// import { useState } from "react";
// import img from './assets/image.png';

// const App = () => {
//   const [amount, setAmount] = useState('');
//   const [percent, setPercent] = useState('');
//   const [tenure, setTenure] = useState('');

//   const [futureValue, setFutureValue] = useState(0);
//   const [amountDeposited, setAmountDeposited] = useState(0);
//   const [showResults, setShowResults] = useState(false);

//   const handleKeyDown = (e) => {
//     if (['e', 'E', '+', '-'].includes(e.key)) {
//       e.preventDefault();
//     }
//   };

//   const handlePaste = (e) => {
//     const pastedData = e.clipboardData.getData('text');
//     if (/[^0-9]/.test(pastedData)) {
//       e.preventDefault();
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const P = Number(amount);
//     const r = (percent / 100) / 12;
//     const n = tenure * 12;

//     const FV = Math.round(P * (((1 + r) ** n - 1) / r) * (1 + r));

//     setFutureValue(FV);
//     setAmountDeposited(P * n);
//     setShowResults(true);
//   };

//   return (
//     <div className="px-20">
//       <div>
//         <div className="py-8 flex justify-center items-center">
//           <h1 className="text-3xl font-medium">SIP Calculator</h1>
//         </div>
//         <div className="flex gap-10 mt-8">
//           {/* Form Section */}
//           <div className="w-full shadow-gray rounded-lg py-8 px-20">
//             <div className="flex m-auto">
//               <p className="border-b-2 pb-2 m-auto border-gray-500 flex text-center">
//                 Your journey to wealth begins here – calculate your SIP growth now!
//               </p>
//             </div>

//             <div className="mt-6 flex flex-col gap-2">
//               <p>Frequency of Investment</p>
//               <div className="flex gap-4">
//                 <p className="w-fit border-b-2 py-1 px-4 border-gray-400">Monthly</p>
//                 {/* <p className="w-fit border-b-2 py-1 px-4 border-gray-400">Lumpsum</p> */}
//               </div>
              
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="flex gap-8 items-center mt-8">
//                 <div>
//                   <p>Monthly Investment Amount</p>
//                   <input
//                     className="w-[360px] border py-3 px-6 border-gray-600 rounded-sm outline-0 mt-2"
//                     type="number"
//                     placeholder="Ex. 1000₹"
//                     onKeyDown={handleKeyDown}
//                     onPaste={handlePaste}
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <p>Expected Rate of Return</p>
//                   <input
//                     className="w-[360px] border py-3 px-6 border-gray-600 rounded-sm outline-0 mt-2"
//                     type="number"
//                     placeholder="Ex. 12%"
//                     onKeyDown={handleKeyDown}
//                     onPaste={handlePaste}
//                     value={percent}
//                     onChange={(e) => setPercent(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <p>Tenure</p>
//                 <input
//                   className="w-[360px] border py-3 px-6 border-gray-600 rounded-sm outline-0 mt-2"
//                   type="number"
//                   placeholder="Ex. 10y"
//                   onKeyDown={handleKeyDown}
//                   onPaste={handlePaste}
//                   value={tenure}
//                   onChange={(e) => setTenure(e.target.value)}
//                 />
//               </div>

//               <div className="mt-6">
//                 <input
//                   type="submit"
//                   value="Calculate"
//                   className="py-2 px-4 bg-blue-500 text-white hover:opacity-90 rounded-sm hover:cursor-pointer"
//                 />
//               </div>
//             </form>

//             {/* Result Section */}
//             <div
//               className={`mt-8 p-6 border-2 border-blue-500 rounded-sm flex-col gap-3 bg-blue-300 transition-all duration-400 ${showResults ? 'flex opacity-100 visible' : 'opacity-0 invisible h-0 overflow-hidden'
//                 }`}
//             >
//               <div className="flex items-center gap-1">
//                 <p className="text-[16px]">Your Future Value :</p>
//                 <p>{futureValue.toLocaleString()}</p>
//               </div>
//               <div className="flex items-center gap-1">
//                 <p className="text-[16px]">Total Earnings :</p>
//                 <p>{(futureValue - amountDeposited).toLocaleString()}</p>
//               </div>
//               <div className="flex items-center gap-1">
//                 <p className="text-[16px]">Total Amount Deposited :</p>
//                 <p>{amountDeposited.toLocaleString()}</p>
//               </div>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="w-1/2 flex items-center justify-center">
//             <div className="p-4 rounded">
//               <img src={img} width={400} className="object-cover rounded" alt="SIP" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import img from './assets/image.png';

const App = () => {
  const [amount, setAmount] = useState('');
  const [percent, setPercent] = useState('');
  const [tenure, setTenure] = useState('');

  const [futureValue, setFutureValue] = useState(0);
  const [amountDeposited, setAmountDeposited] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleKeyDown = (e) => {
    if (['e', 'E', '+', '-'].includes(e.key)) {
      e.preventDefault();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData('text');
    if (/[^0-9]/.test(pastedData)) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const P = Number(amount);
    const r = (percent / 100) / 12;
    const n = tenure * 12;

    const FV = Math.round(P * (((1 + r) ** n - 1) / r) * (1 + r));

    setFutureValue(FV);
    setAmountDeposited(P * n);
    setShowResults(true);
  };

  return (
    <div className="px-4 sm:px-10 lg:px-20 py-6">
      <div className="text-center py-4">
        <h1 className="text-2xl sm:text-3xl font-medium">SIP Calculator</h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 mt-4">
        {/* Form Section */}
        <div className="w-full mt-8 rounded-lg py-6 px-6 sm:px-10 bg-white">
          <div className="text-center border-b pb-4 border-gray-300">
            <p className="text-gray-700 text-sm sm:text-base">
              Your journey to wealth begins here – calculate your SIP growth now!
            </p>
          </div>

          <div className="mt-6">
            <p className="font-medium">Frequency of Investment</p>
            <div className="flex gap-4 mt-2">
              <p className="w-fit border-b-2 py-1 px-4 border-gray-400">Monthly</p>
              {/* <p className="w-fit border-b-2 py-1 px-4 border-gray-400">Lumpsum</p> */}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <p className="font-medium">Monthly Investment Amount</p>
                <input
                  className="w-full border py-3 px-4 border-gray-600 rounded outline-none mt-2"
                  type="number"
                  placeholder="Ex. 1000₹"
                  onKeyDown={handleKeyDown}
                  onPaste={handlePaste}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <p className="font-medium">Expected Rate of Return</p>
                <input
                  className="w-full border py-3 px-4 border-gray-600 rounded outline-none mt-2"
                  type="number"
                  placeholder="Ex. 12%"
                  onKeyDown={handleKeyDown}
                  onPaste={handlePaste}
                  value={percent}
                  onChange={(e) => setPercent(e.target.value)}
                />
              </div>
            </div>

            <div>
              <p className="font-medium">Tenure (in years)</p>
              <input
                className="w-full border py-3 px-4 border-gray-600 rounded outline-none mt-2"
                type="number"
                placeholder="Ex. 10y"
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <input
                type="submit"
                value="Calculate"
                className="py-2 px-6 bg-blue-500 text-white hover:opacity-90 rounded cursor-pointer"
              />
            </div>
          </form>

          {/* Results */}
          <div
            className={`mt-6 p-4 border-2 border-blue-500 rounded bg-blue-100 transition-all duration-300 ${showResults ? 'block' : 'hidden'
              }`}
          >
            <div className="text-sm sm:text-base flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="font-medium">Your Future Value:</span>
                <span>{futureValue.toLocaleString()}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Total Earnings:</span>
                <span>{(futureValue - amountDeposited).toLocaleString()}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Amount Deposited:</span>
                <span>{amountDeposited.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="p-2">
            <img
              src={img}
              className="w-full max-w-[300px] sm:max-w-[380px] object-cover rounded"
              alt="SIP"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;