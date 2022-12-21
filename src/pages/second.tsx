function Second() {
  return (
    <div className="container">
      <h1>This is the second page</h1>
      <h2>
        This could be a feature page (product page, barcode creator, barcode to
        be scanned, etc)
      </h2>
      <h3>Click link below to travel back home!</h3>
      <div className="row">
        <a href="/index">
          <button type="button">Travel Back Home</button>
        </a>
      </div>
    </div>
  );
}

export default Second;
