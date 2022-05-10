function Header({ title }) {
  return <h1>{title ? title : "Welcome To The Funk Zone!"}</h1>;
}

export default function HomePage() {
  return <Header title="Welcome To The Undergronic Outpost!" />;
}
