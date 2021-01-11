import { Container } from "react-bootstrap";
import RowResult from "./Row";

function Results({ items = [] }) {
  /* Hooks */
  /* Selectores */
  /* Constants */
  /* Estados */
  /* useEffects */
  /* Handlers */
  /* Props */

  return (
    <div className="justify-content-center">
      <Container
        className="p-4 my-4 bg-white text-dark"
        style={{ minHeight: 400 }}
      >
        <h4>Results:</h4>
        {items.map((item, idx) => (
          <RowResult
            key={idx}
            text={item.text}
            isPalindrome={item.palindrome}
          />
        ))}
      </Container>
    </div>
  );
}
export default Results;
