import { useState, useEffect, useReducer } from "react";

function Header({ title }) {
  return (
    <div className="box">{title ? title : "Welcome To The Funk Zone!"}</div>
  );
}

function NavMenu({ navmenu }) {
  return (
    <div id="nav-menu" className="box">
      {navmenu ? navmenu : "This is the nav menu."}
    </div>
  );
}

function Summary({ summary }) {
  const [gateState, setGateState] = useState("closed");
  const [gateStateReducer, setGateStateReducer] = useReducer(
    (gateStateReducer) => (gateStateReducer == "open" ? "closed" : "open"),
    "closed"
  );
  const toggleGate = () => {
    const targetState = gateState == "open" ? "closed" : "open";
    setGateState(targetState);
  };

  useEffect(() => {
    console.log(`The gate state is: ${gateStateReducer}`);
  }, [gateStateReducer]);

  return (
    <div id="summary-container" className="box">
      {summary ? summary : "This is a summary of this page."}
      <p>Gate status: {gateStateReducer}</p>
      <button id="gate-button" onClick={setGateStateReducer}>
        Operate Gate
      </button>
    </div>
  );
}

function Footer({ footer }) {
  return (
    <div id="footer" className="box">
      {footer ? footer : "This is the footer bit."}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="wrapper">
      <Header title="Welcome To The Undergronic Outpost!" />
      <NavMenu />
      <Summary summary="Yo dude this page is all about some stuff." />
      <Footer />
    </div>
  );
}
