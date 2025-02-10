import Palabra from "../Models/Palabra.js";

class Service {
  palabraModel = new Palabra();

  ingresarPalabraService = async (palabra) => {
    try {
      const palabraValidate = /^[a-zA-Z]+$/.test(palabra);

      if (!palabraValidate) throw error;

      const data = await this.palabraModel.create(palabra);
      return data;
    } catch (error) {
      throw error;
    }
  };


  listarPalabraService = async () => {
    try {
        

      const data = await this.palabraModel.getAll();
      return data;
    } catch (error) {
      throw error;
    }
  };

  borrarPalabraService = async (palabra) => {
    try {
      const palabraValidate = /^[a-zA-Z]+$/.test(palabra);

      if (!palabraValidate) throw error;

      const data = await this.palabraModel.borrar(palabra);
      if (!data) throw error;
      return data;
    } catch (error) {
      throw error;
    }
  };

  listarApiPalabraService = async (cantidad) => {
    try {
      const cantidadValidate = /^[0-9]+$/.test(cantidad);

      if (!cantidadValidate) throw error;
        const apiData = await fetch(`https://texto.deno.dev/palabras?cantidad=${cantidad}`)
        const {palabras} = await apiData.json()

      const data = await this.palabraModel.bulkCreate(palabras);
      //if (!data) throw error;
      return data;
    } catch (error) {
      throw error;
    }
  };

  contarPalabrasService = async () => {
    try {
      const palabras = this.palabraModel.palabras;  // Obtenemos las palabras
      const conteo = {};
  
      // Contamos las veces que aparece cada palabra
      palabras.forEach((palabra) => {
        conteo[palabra] = conteo[palabra] ? conteo[palabra] + 1 : 1;
      });
  
      return conteo;
    } catch (error) {
      console.error("Error al contar palabras:", error);
      throw error;  // Lanzamos el error para que se capture en el controlador
    }
  };
  

}

export default Service;
