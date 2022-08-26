import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Analysis from "../components/analysis";
import Daolist from "../components/daolist";
import Header from "../components/header";
import Jumbotron from "../components/jumbotron";
import ReactSlider from "../components/ReactSlider";
import Fetches from "../components/actions";
import PopModal from "../components/modal";
import router from "next/router";

export default function Home() {
  const [data, setData] = useState([]);
  const [blockchains, setBlockchain] = useState(null);
  const [popModalState, setPopModalState] = useState(false);
  const [formPlace, setFormPlace] = useState("Ethereum Mainnet");
  const [formChain, setFormChain] = useState("1");
  const [userAddress, setUserAddress] = useState("");

  const popSwitch = () => {
    setPopModalState(!popModalState);
  };

  const getData = async () => {
    const blockchainResponse = await Fetches.get_all_chain();
    setBlockchain(blockchainResponse);
  };

  const reportee = (x, y) => {
    setFormPlace(x);
    setFormChain(y);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={""}>
      <Head>
        <title>CoinDAO</title>
        <meta
          name="description"
          content="This is a dao analysis app, it helps tp show the analysis of DAO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="main__bk__one"></div>
        <div className="main__bk__two"></div>
        <div className="main__bk__three"></div>
        <div className="main__bk__four"></div>
        <div className="the__back__drop"></div>

        <div className="container">
          <iframe
            className="responsive-iframe"
            src="https://coinhippo.io?widget=price-marquee&theme=?"
            title="Price Update"
            frameBorder="0"
            width="100%"
            height="35"
          ></iframe>
          <Header />
          <Jumbotron />

          <div className="modal__home__container">
            {popModalState && (
              <PopModal
                blockchainData={blockchains}
                offPopModal={popSwitch}
                report={reportee}
              />
            )}
          </div>

          <div className="">
            <h3 className="search-address">
              Analyze any DAO on any Blockchain
            </h3>
            <div className="form-container">
              <input
                type={"text"}
                placeholder="Enter DAO contract address"
                value={userAddress}
                onChange={(e) => {
                  setUserAddress(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setPopModalState(popSwitch);
                }}
              >
                <strong>{formPlace ? formPlace : "Ethereum Mainnet"}</strong>
              </button>
              <button
                className="form-container-submit"
                onClick={() => {
                  router.push(`/${userAddress}?chainid=${formChain}`);
                }}
              >
                <strong>Analyze</strong>
              </button>
            </div>
          </div>
          <Analysis />
          <Daolist />
        </div>
      </main>
    </div>
  );
}
