import { useRef, useEffect, useReducer } from "react";

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
  const [gateStateReducer, setGateStateReducer] = useReducer(
    (gateStateReducer) => (gateStateReducer == "open" ? "closed" : "open"),
    "closed"
  );

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

function ColourSelector() {
  const txtTitle = useRef();

  const submitFunc = (e) => {
    e.preventDefault();
    console.log(`Text title = ${txtTitle.current.value}`);
  };

  return (
    <form className="box" onSubmit={submitFunc}>
      <input ref={txtTitle} type="text" placeholder="colour title ..." />
      <input type="color" />
      <button>ADD</button>
    </form>
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
      <ColourSelector />
      <Summary summary="Yo dude this page is all about some stuff." />
      <Footer />
    </div>
  );
}
