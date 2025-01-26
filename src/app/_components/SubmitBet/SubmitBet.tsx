"use client";
// this pulls from the react library to use the useState function
import { useState } from "react";
// this is the component that holds the entire function to export onto the page.tsx
export default function SubmitBet() {
  // useState is like a variable that holds onto states that changes (i.e. the input changes so it holds onto the new input) "initial state, new state" the useState parameters set it to 0
  const [betAmt, setAmt] = useState(0);
  //   variable
  const balance: number = 200;
  //   updateInput handles the onChange of input, whenever something is typed inside. "const 'name of function' = (parameter) => {update function for initial state}"
  // how things happen in order: updateInput is an event listener, when there is a change, turns on onChange, updates the state/value
  const updateInput = (event) => {
    // "event.target.value is the value of what you're typing inside the input element"
    // "setAmt() updates the state betAmt"
    setAmt(event.target.value);
  };

  return (
    <>
      <div className="bg-emerald-900 p-[1.5rem] rounded-lg flex flex-col max-w-[375px]">
        <div>
          <p>Balance: ${balance}</p>
        </div>
        <div className="text-black">
          <div className="flex gap-[.5rem]">
            <input
              className="rounded-md pl-[1rem]"
              type="number"
              placeholder="Enter Amount"
              value={betAmt === 0 ? "" : betAmt}
              //   its an event listener and when you type something onChange activates whatever its directed to do, so activate updateInput
              onChange={updateInput}
            />
            <div className="bg-emerald-600 w-[2rem] flex justify-center items-center rounded-md">
              <p>2x</p>
            </div>
            <div className="bg-green-500 max-w-[80px] h-[50px] p-1 rounded-md">
              <p className="truncate">
                <span className="truncate block overflow-hidden whitespace-nowrap">
                  ${betAmt && betAmt * 2}
                </span>{" "}
                Dollas 🤑
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-[.5rem]">
            <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 p-1 px-[2.5rem] rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
