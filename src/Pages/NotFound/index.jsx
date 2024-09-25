import "../App/App.css";
import "./styles.css"

function NotFound() {
  return (
    <div className="main">
      <h1 className="h1-notfound">
        4
        <span>
          <i className="fas fa-ghost"></i>
        </span>
        4
      </h1>
      <h2 className="title-notfound">Error: 404 page not found</h2>
      <p className="subTittle-notfound">Sorry, the page you're looking for cannot be accessed</p>
    </div>
  );
}

export { NotFound };
