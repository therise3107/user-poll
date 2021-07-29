import Container from "component/container";

const Layout = ({ children, ...rest }) => (
  <>
    <header>
      <main>
        <Container>{children}</Container>
      </main>
    </header>
  </>
);

export default Layout;
