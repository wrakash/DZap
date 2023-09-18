import React, { useContext } from "react";
import { MyContext } from "../../store/MyContext";

interface Props {
  onPreviewClick: () => void;
}

const DispersePreview: React.FC<Props> = ({ onPreviewClick }) => {
  const { store, setStore } = useContext(MyContext);

  return (
    <>
      {!!!store.errors?.length && !!store.validatedToken?.length && (
        <>
          <div className="w-full flex justify-center items-center">
            <button
              onClick={() => onPreviewClick()}
              type="button"
              className="w-full p-2 bg-blue-700 rounded text-white"
            >
              Next
            </button>
          </div>

          {store.preview && (
            <div>
              <p>Address : </p>
              {store.validatedToken?.map(({ addressWithAmount }, index) => {
                return <p key={index}>{addressWithAmount.split(/,| |=/)[0]}</p>;
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DispersePreview;
