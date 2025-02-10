import Temperatura from "../Models/Temperatura.js";

const temperaturaModel = new Temperatura(); 

class TemperaturaController {
  agregarTemperatura = async (req, res) => {
    let { magnitud, unidad } = req.body;

    magnitud = Number(magnitud);

    if (isNaN(magnitud)) {
      return res.status(422).json({ errorMsg: "Debe ser un numero." });
    }

    const unidadesValidas = ["celsius", "farenheit", "kelvin"];
    if (!unidadesValidas.includes(unidad.toLowerCase())) {
      return res.status(422).json({ errorMsg: "Debe ser celsius, farenheit o kelvin" });
    }

    const nuevaTemperatura = await temperaturaModel.create(magnitud, unidad.toLowerCase());
    res.status(200).json(nuevaTemperatura);
  };

  listarTemperaturasEnRango = async (req, res) => {
    const { min, max } = req.query;

   
    if (isNaN(min) || isNaN(max)) {
      return res.status(422).json({ errorMsg: "Deben ser numeros" });
    }

    
    const minTemp = parseFloat(min);
    const maxTemp = parseFloat(max);

    
    const temperaturas = await temperaturaModel.getAll();
    const temperaturasEnRango = temperaturas.filter(temp => temp.magnitud >= minTemp && temp.magnitud <= maxTemp);

    
    res.status(200).json(temperaturasEnRango);
  };
}

export default new TemperaturaController();
