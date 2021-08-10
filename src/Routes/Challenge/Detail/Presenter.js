import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import {ChallengeContainer, MyverifyContainer, AllverifyContainer} from "./Components";



const Presenter = ({data_challenge, data_myverify, data_allverify, loading}) =>
loading ? (<><Helmet><title>Loading | Dowith</title></Helmet>{/* <Loader /> */}</>) : 
    (
      <>
        <Helmet><title>Challenge | Dowith</title></Helmet>
        <ChallengeContainer data_challenge={data_challenge}/>
        <MyverifyContainer data_myverify={data_myverify}/>
        <AllverifyContainer data_allverify={data_allverify}/>
      </>
  );

Presenter.propTypes = {
  data_challenge:PropTypes.object.isRequired,
  data_myverify:PropTypes.object,
  data_allverify:PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

export default Presenter;



