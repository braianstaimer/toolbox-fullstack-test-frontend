import { Badge, Col, Row } from "react-bootstrap";

function RowResult({ text, isPalindrome }) {
  /* Hooks */
  /* Selectores */
  /* Constants */
  /* Estados */
  /* useEffects */
  /* Handlers */
  /* Props */

  return (
    <Row className="justify-content-center">
      <Col xs="12" sm="8" className="border m-2">
        <span>{text}</span>{" "}
        {isPalindrome ? <Badge variant="secondary">Palindrome</Badge> : null}
      </Col>
    </Row>
  );
}
export default RowResult;
