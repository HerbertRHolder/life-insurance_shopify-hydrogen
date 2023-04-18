export default function Footer({ShopName}) {
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <div role="footer" className="dol footer">
      <div className="dol">
        <p>{ShopName}</p>
      </div>
    </div>
  );
}
