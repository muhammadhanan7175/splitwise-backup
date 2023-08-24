import React from "react";
import Introduction from "../../components/Introduction/Introduction";
import FirstUtility from "../../components/FirstUtility/FirstUtility";
import SecondUtility from "../../components/SecondUtility/SecondUtility";
import Explainer from "../../components/Explainer/Explainer";
import Benifits from "../../components/Benifits/Benifits";

function Home() {
  return (
    <>
      <Introduction />
      <FirstUtility />
      <SecondUtility />
      <Explainer />
      <Benifits />
    </>
  );
}
export default Home;
