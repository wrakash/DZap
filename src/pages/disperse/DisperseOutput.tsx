import React, { useContext } from "react";
import { MyContext } from "../../store/MyContext";


const DisperseOutput = () => {
  const { store } = useContext(MyContext);


  return (
    <>
      {!!store.validatedToken?.length && (
        <div className="space-y-2">
          <p>Addresses with Amounts: </p>

          <div className="bg-gray-100 rounded-sm flex w-full min-h-[260px] space-x-4 py-3  px-10">
            <div>
              {store.validatedToken?.map((_, index: number) => {
                return (
                  <p className="text-gray-400 font-bold" key={index}>
                    {index + 1}
                  </p>
                );
              })}
            </div>

            <div className="hull w-[1px] bg-gray-300" />

            <div>
              {store.validatedToken?.map(
                (token: { addressWithAmount: string }, index: number) => {
                  return (
                    <div className="" key={index}>
                      <p className="flex space-x-1 font-semibold">
                        {token.addressWithAmount}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <p>Separated by ',' or '' or '='</p>
        </div>
      )}
    </>
  );
};
export default DisperseOutput;
