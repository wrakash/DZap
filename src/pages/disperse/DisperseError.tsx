import React, { useContext } from "react";
import { MyContext } from "../../store/MyContext";
import { useDisperse } from "./useDisperse";

interface Props {
  keepFirst: () => void;
  combineBalance: () => void;
}

const DisperseError: React.FC<Props> = ({ keepFirst, combineBalance }) => {
  const { store } = useContext(MyContext);

  return (
    <>
      {!!store.errors?.length && (
        <div className="space-y-4">
          {store.errors?.map((error, index) => {
            return (
              <div key={index} className="space-y-2">
                {error.type === "Duplicated" && (
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-red-500">Duplicated</p>
                    </div>
                    <div className="flex space-x-4">
                      <button onClick={keepFirst} className="text-red-500">
                        Keep the first one
                      </button>
                      <div className="hull w-[1px] bg-red-500" />
                      <button onClick={combineBalance} className="text-red-500">
                        Combine Balance
                      </button>
                    </div>
                  </div>
                )}

                <div className="w-full border border-red-500 space-x-2 rounded-sm inline-flex items-start min-h-[40px] p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500 mt-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>

                  <div>
                    {error.details?.map((detail, index) => {
                      return (
                        <p className="text-red-500" key={index}>
                          {detail}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DisperseError;
