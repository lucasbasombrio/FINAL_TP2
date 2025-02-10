class Temperatura {
  temperaturas = [];

  create = async (magnitud, unidad) => {
    const temperatura = { magnitud, unidad };
    this.temperaturas.push(temperatura);
    return temperatura;
  };

  getAll = async () => {
    return this.temperaturas;
  };
}

export default Temperatura;
