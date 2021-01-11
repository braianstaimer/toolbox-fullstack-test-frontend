import { IechoServices } from "../../services/iechoServices";
const axios = require("axios");

/* Constante de acciones ejecutadas por el reducer */
export const GET_INVERTED_TEXT = "[IECHO] GET_INVERTED_TEXT";
export const SET_INVERTED_TEXT = "[IECHO] SET_TEXT_INVERTIDO";
export const GET_INVERTED_TEXT_ERROR = "[IECHO] GET_INVERTED_TEXT_ERROR";

export const CHANGE_KEY_FORM = "[IECHO] CHANGE_KEY_FORM";

/**
 * URL DE SERVICIOS
 */
const urlIecho = `${IechoServices.baseURL}${IechoServices.iecho}`;

/***************************************************************************
 * SERVICIOS PARA IECHO
 **************************************************************************/
/**
 * Mutar el valor en memoria de del detalle de texto actual
 * @param {*} item
 */
export function changeKeyForm(item) {
  return {
    type: CHANGE_KEY_FORM,
    payload: item,
  };
}

/**
 * Invierte el orden de un texto y valida si es palindrome
 * @param {*} textDetails
 */
export function getInverseText(textDetails) {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_INVERTED_TEXT,
      });
      //validar que el texto es correcto
      if (!textDetails.text) throw new Error("Parámetros inválidos");
      //definir url
      const url = `${urlIecho}`;
      //definir params
      const params = {
        text: textDetails.text,
      };
      //consumir servicio para obtener el texto invertido
      const reqResult = await axios.get(url, { params });
      //validar que no exista errores
      if (reqResult.status !== 200) throw new Error(reqResult.data.error);
      //agregar resultado a memoria
      dispatch({
        type: SET_INVERTED_TEXT,
        payload: reqResult.data,
      });
      //retornar objeto de exito
      return {
        valid: true,
      };
    } catch (error) {
      alert(error.message)
      dispatch({
        type: GET_INVERTED_TEXT_ERROR,
      });
      //retornar objeto de error
      return {
        valid: false,
      };
    }
  };
}
