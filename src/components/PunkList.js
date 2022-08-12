import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  console.log("punk list data is what ", punkListData);
  console.log("(!) This array i map: ", punkListData.assets);
  return (
    <div className="punkList">
      {punkListData && punkListData
        ? punkListData.map((punk, index) => {
            return (
              <div onClick={() => setSelectedPunk(punk.token_id)} key={index}>
                <CollectionCard
                  key={punk.token_id}
                  id={punk.token_id}
                  name={punk.name}
                  traits={punk.traits}
                  image={punk.image_original_url}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default PunkList;
