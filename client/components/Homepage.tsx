import React, {FC, useState, useContext, useEffect} from 'react';
import Diagram from './HomeComponents/Diagram';
import Header from './HomeComponents/Header';
import InputContainer from './HomeComponents/InputContainer';
import QueryResults from './HomeComponents/QueryResults';
import Split from 'react-split';

const TopComp = () => {
  return (
    <div>
      <Split className="flex" sizes={[30, 70]} minSize={[270, 40]}>
        <InputContainer />
        <Diagram />
      </Split>
    </div>
  );
};

const LowerComp = () => {
  return (
    <div>
      <QueryResults />
    </div>
  );
};

const Homepage: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Split direction="vertical" minSize={[600, 200]} gutterSize={5}>
          <TopComp />
          <LowerComp />
        </Split>
      </div>
    </>
  );
};

export default Homepage;

{
  /* <Split
      className="flex2"
      direction="vertical"
      sizes={[30, 70]}
      style={{height: 'calc(100vh-4rem'}}
    >
      <Split className="flex" sizes={[20, 80]} minSize={[10, 40]}>
        <div>Query</div>
        <div>Diagram</div>
      </Split>
      <div>Results</div>
    </Split>
    
    */
}

//vertial split works, but horizontal split does not
/*
  return (
    <Split
      direction="vertical"
      sizes={[70, 30]}
      style={{height: 'calc(100vh-4rem'}}
    >
      <Split className="flex" sizes={[30, 70]} minSize={[10, 40]}>
        <InputContainer />
        <Diagram />
      </Split>
      <QueryResults />
    </Split>
  );

*/
