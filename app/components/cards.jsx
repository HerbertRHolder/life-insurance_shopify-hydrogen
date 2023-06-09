export function CardTop({children}) {
  return <div className="card-top_absolute d-flex ">{children}</div>;
}
export function CardColumn({form}) {
  return <div className="card-column d-flex">{form}</div>;
}
export function CardInfo({title, info}) {
  return (
    <div className="card-info  d-flex flex-column justify-content-center gap-5">
      <h1 className="fs-3 opensans-font fw-bold">{title}</h1>
      <p className="fs-6 fw-light opensans-font">{info}</p>
    </div>
  );
}
