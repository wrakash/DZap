import React, { useContext } from "react";
import { MyContext } from "../../store/MyContext";

const DispersePreview = () => {
  const { store } = useContext(MyContext);

  return (
    <>
      {!!!store.errors?.length && !!store.validatedToken?.length && store.preview && (
        <div>
          <p>Address : </p>
          {store.validatedToken?.map(({ address }, index) => {
            return <p key={index}>{address}</p>;
          })}
        </div>
      )}
    </>
  );
};

export default DispersePreview;
