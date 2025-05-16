import { useState } from "react";

const App = () => {

  const [amount, setAmount] = useState('');
  const [percent, setPercent] = useState('');
  const [tenure, setTenure] = useState('');

  const[futureValue, setFutureValue] = useState(0);
  const[amountDeposited, setAmountDeposited] = useState(0);

  const [displayData, setDisplayData] = useState('hidden'); // pending...


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

    const P = amount
    const r = (percent / 100) / 12
    const n = tenure * 12
    const FV = Math.round(P * (((1 + r) ** n - 1) / r) * (1 + r));

    setFutureValue(FV);
    setAmountDeposited(P * n);
  }

  return (
    <div className="px-20">
      <div>
        <div className="py-8 flex justify-center items-center">
          <h1 className="text-3xl font-medium">SIP Calculator</h1>
        </div>
        <div className="w-[850px] bg-[#F8F8FF] shadow-gray rounded-lg shadow-lg py-8 px-6">
          <div className="flex m-auto">
            <p className="border-b-2 pb-2 m-auto border-gray-500 flex">Your journey to wealth begins here – calculate your SIP growth now !</p>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <p>Frequency of Investment</p>
            <p className="w-1/8 border-b-2 py-1 px-4 border-gray-400">Monthly</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mt-8">
              <div>
                <p>Monthly Investment Amount</p>
                <input className="w-[360px] border-1 py-3 px-6 border-gray-600 outline-0 mt-2" type="number" placeholder="Ex. 1000₹" onKeyDown={handleKeyDown} onPaste={handlePaste} name="monthly_inv_amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
              </div>
              <div>
                <p>Expected Rate of Return</p>
                <input className="w-[360px] border-1 py-3 px-6 border-gray-600 outline-0 mt-2" type="number" placeholder="Ex. 12%" onKeyDown={handleKeyDown} onPaste={handlePaste} name="rate_of_return" value={percent} onChange={(e) => setPercent(e.target.value)} />
              </div>
            </div>
            <div className="mt-4">
              <p>Tenure</p>
              <input className="w-[360px] border-1 py-3 px-6 border-gray-600 outline-0 mt-2" type="number" placeholder="Ex. 10y" onKeyDown={handleKeyDown} onPaste={handlePaste} name="tenure" value={tenure} onChange={(e) => setTenure(e.target.value)} />
            </div>
            <div className="mt-6">
              <input type="submit" value={"Calculate"} className="py-2 px-4 bg-blue-500 text-white hover:opacity-90 rounded-sm hover:cursor-pointer" />
            </div>
          </form>
          <div className="bg-blue-300 mt-8 p-6 border-2 border-blue-500 flex rounded-sm flex-col gap-3">
            <div className="flex items-center gap-1">
              <p className="text-[16px]">Your Future Value :</p>
              <p>{futureValue}</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[16px]">Total Earnings :</p>
              <p>{futureValue - amountDeposited}</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[16px]">Total Amount Deposited :</p>
              <p>{amountDeposited}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App