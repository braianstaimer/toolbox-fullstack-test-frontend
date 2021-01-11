import { useDispatch, useSelector } from "react-redux";
import Layout from "../../@components/Layout/Layout";

import { changeKeyForm, getInverseText } from "../store/actions/iecho.actions";

function App() {
  /* Hooks */
  const dispatch = useDispatch();
  /* Selectores */
  /*Selector a los resultados actuales */
  const { items, textDetails } = useSelector(({ iecho }) => iecho);
  /* Constants */
  /* Estados */
  /* useEffects */
  /* Handlers */
  /**
   * Mutar una llave en redux
   * @param {*} event
   */
  const changeKey = (event) => {
    let data = {
      [event.target.name]: event.target.value,
    };
    dispatch(changeKeyForm(data));
  };

  const handleSubmit = async () => {
    //submit new text
    dispatch(getInverseText(textDetails));
  };
  /* Props */
  const propsInput = {
    name: "text",
    value: textDetails.text,
    onChange: changeKey,
  };
  const propsBtnSend = {
    onClick: handleSubmit,
  };
  return (
    <Layout items={items} propsInput={propsInput} propsBtnSend={propsBtnSend} />
  );
}
export default App;
