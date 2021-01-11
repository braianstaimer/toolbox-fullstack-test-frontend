import Header from "../Header/Header";
import Results from "../Results/Results";

function Layout({ items, propsInput, propsBtnSend }) {

  return (
    <div className="App">
      <Header propsInput={propsInput} propsBtnSend={propsBtnSend} />
      <Results items={items} />
    </div>
  );
}
export default Layout;
