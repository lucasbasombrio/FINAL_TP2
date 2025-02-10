class Palabra {
    palabras = [];
  
    create = async (palabra) => {
      this.palabras.push(palabra);
      return this.palabras[this.palabras.length - 1];
    };
  
    getAll = async () => {
      return this.palabras.join(" ");
    };
  
    borrar = async (palabra) => {
      const isPalabra = this.palabras.includes(palabra);
  
      if (isPalabra) {
        this.palabras = this.palabras.filter((value) => value != palabra);
      }
  
      return isPalabra ? palabra : isPalabra;
    };
  
    bulkCreate = async (array) => {
      this.palabras.push(...array);
      return this.palabras;
    };

    contarPalabras = async () => {
      const conteo = {};
      this.palabras.forEach((palabra) => {
        conteo[palabra] = (conteo[palabra] || 0) + 1;
      });
      return conteo;
    };
  }
  
  export default Palabra;
  