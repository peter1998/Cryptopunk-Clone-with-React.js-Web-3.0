import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  const getMyNfts = async () => {
    try {
      const response = await fetch(
        "testnets-api.opensea.io/assets?asset_contract_address=0xbf6134EbD8669F996A1E925fc3ae93cA1711803e&order_direction=asc"
      );

      const json = await response.json();
      console.log(json);
      setPunkListData(json.assets.reverse());
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMyNfts();
    console.log("punkListData:", punkListData);
    console.log("selectedPunk", selectedPunk);
    console.log("punklistData---->:)", punkListData);
  }, []);

  return (
    <div className="app">
      <Header />

      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
