import Container from "components/Container";
import { Link } from "react-router-dom";

const Layout = ({ children, ...rest }) => (
  <>
    <header>
      <Container>
        <Link to="/">
          <h1>Questions</h1>
        </Link>
      </Container>
    </header>
    <main>
      <Container>{children}</Container>
    </main>
  </>
);

export default Layout;
