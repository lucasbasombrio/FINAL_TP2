import Service from "../services/Service.js";

class Controller {
  service = new Service();

  ingresarPalabra = async (req, res) => {
    try {
      const { palabra } = req.body;

      const data = await this.service.ingresarPalabraService(palabra);

      res.status(200).send({ Msg: data });
    } catch (error) {
      res.status(422).send({ errorMsg: "No valida" });
    }
  };

  listarPalabras = async (req, res) => {
    try {
      const data = await this.service.listarPalabraService();

      res.status(200).send({ Msg: data });
    } catch (error) {
      res.status(422).send({ errorMsg: "No valida" });
    }
  };

  
  borrarPalabras = async (req, res) => {
    try {
      const { palabra } = req.params;
      const data = await this.service.borrarPalabraService(palabra);
      res.status(200).send({ msg: `Palabra '${data}' eliminada correctamente` });
    } catch (error) {
      res.status(error.message === "Palabra no encontrada" ? 404 : 422).send({ errorMsg: "Palabra no encontrada o no es valida" });
    }
  };

  allApiPalabras = async (req, res) => {
    try {
      const { cantidad } = req.params;
      const data = await this.service.listarApiPalabraService(cantidad);

      res.status(200).send({ Msg: data });
    } catch (error) {
      res.status(422).send({ errorMsg: "No valida" });
    }
  };
  
  contarPalabras = async (req, res) => {
    try {
      const data = await this.service.contarPalabrasService();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ errorMsg: "Error al contar palabras" });
    }
  };
}



export default Controller;
