function Header({ title }) {
  return <div class="box">{title ? title : "Welcome To The Funk Zone!"}</div>;
}

function NavMenu({ navmenu }) {
  return (
    <div id="nav-menu" class="box">
      {navmenu ? navmenu : "This is the nav menu."}
    </div>
  );
}

function Summary({ summary }) {
  return (
    <div id="summary-container" class="box">
      {summary ? summary : "This is a summary of this page."}
    </div>
  );
}

function Footer({ footer }) {
  return (
    <div id="footer" class="box">
      {footer ? footer : "This is the footer bit."}
    </div>
  );
}

export default function HomePage() {
  return (
    <div class="wrapper">
      <Header title="Welcome To The Undergronic Outpost!" />
      <NavMenu />
      <Summary summary="Yo dude this page is all about some stuff." />
      <Footer />
    </div>
  );
}
