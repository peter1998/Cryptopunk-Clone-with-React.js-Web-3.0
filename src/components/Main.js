import React from "react";
import "./Main.css";
import { useState } from "react";
import { useEffect } from "react";

const Main = ({ punkListData, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
    console.log("punkList:", punkListData);
    console.log("selectedPunk:", selectedPunk);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt="" />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>{activePunk.owner.address}</div>
              <div className="ownerHandle">@Peter's Wallet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
