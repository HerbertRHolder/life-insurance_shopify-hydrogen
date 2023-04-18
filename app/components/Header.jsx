export default function Header({ShopName}) {
  return (
    <>
      <div className="banner">
        An Evening at the Hollwood Bowl. Discover More
      </div>
      <header className="">
        <div className="header-interior ">
          <figure className="cinzel-font">{ShopName}</figure>
          <ul className="">
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
          {/* <nav className="">
            <ul className="">
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </nav> */}
          <menu>
            <div className="streak"></div>
            <div className="streak"></div>
            <div className="streak"></div>
          </menu>
        </div>
      </header>
    </>
  );
}