import "./NotFound.css"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section>
      <div className="container not_found_container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">Back To Home</Link>
      </div>
    </section>
  )
}

export default NotFound
