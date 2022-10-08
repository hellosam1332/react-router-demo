import Link from "../router/Link";

export default function Home() {
  return (
    <>
      <h2>HOME</h2>
      <Link to='/about'>
        <h2>To about</h2>
      </Link>
    </>
  );
}
