import { Container, Navbar } from "react-bootstrap";

function Header({ propsInput, propsBtnSend }) {
  /* Hooks */
  /* Selectores */
  /* Constants */
  /* Estados */
  /* useEffects */
  /* Handlers */
  /* Props */

  return (
    <Container fluid style={{ backgroundColor: "#e00002" }}>
      <Navbar expand="lg" className="justify-content-center py-3 row">
        <div className="form-inline my-2 my-lg-0 col-lg-6">
          <input
            className="form-control mr-sm-2 col-lg-10"
            placeholder="Insert Text"
            {...propsInput}
          />
          <button
            className="btn btn-primary my-2 my-sm-0 col"
            {...propsBtnSend}
          >
            Send
          </button>
        </div>
      </Navbar>
    </Container>
  );
}
export default Header;
