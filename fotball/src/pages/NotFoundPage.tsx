import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section>
      <h1 className="bold boldcolor">NotFoundPage</h1>
      <Link to="/">Til Admin siden</Link>
    </section>
  );
};

export default NotFoundPage;
