import React from "react";
import { connect } from "react-redux";
import { startLoginWithGoogle, startLoginAsGuest } from "../actions/auth";

export const LoginPage = ({ startLoginWithGoogle, startLoginAsGuest }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">xpnsr.</h1>
      <p>Expense tracking made easy.</p>
      <button className="button__google" onClick={startLoginWithGoogle}>
        Login with Google
      </button>
      <p>or</p>
      <button className="button__guest" onClick={startLoginAsGuest}>
        Continue as guest
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginAsGuest: () => dispatch(startLoginAsGuest()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
