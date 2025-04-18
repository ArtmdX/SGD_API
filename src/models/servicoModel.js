class Servico {
  constructor(id, descricao, valor, dt_servico, id_categoria, id_cliente, status) {
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
    this.dt_servico = dt_servico;
    this.id_categoria = id_categoria;
    this.id_cliente = id_cliente;
    this.status = status
  }

  static validate(servicoData) {
    const errors = [];

    if (!servicoData.descricao || typeof servicoData.descricao !== "string" || servicoData.descricao.length > 50) {
      errors.push("A descrição é obrigatória e deve ter no máximo 50 caracteres.");
    }

    if (typeof servicoData.valor !== "number" || servicoData.valor <= 0) {
      errors.push("O valor deve ser um número positivo.");
    }

    if (!servicoData.dt_servico || isNaN(Date.parse(servicoData.dt_servico))) {
      errors.push("A data do serviço deve ser uma data válida.");
    }

    if (!Number.isInteger(servicoData.id_categoria) || servicoData.id_categoria <= 0) {
      errors.push("O ID da categoria deve ser um número inteiro positivo.");
    }

    if (!Number.isInteger(servicoData.id_cliente) || servicoData.id_cliente <= 0) {
      errors.push("O ID do cliente deve ser um número inteiro positivo.");
    }

    //EXIBE TODOS OS ERROS
    if (errors.length > 0) {
      throw new Error(errors.join(" | "));
    }
  }

  toJSON(){
      return {
        id: this.id,
        descricao: this.descricao,
        valor: this.valor,
        dt_servico: this.dt_servico,
        id_categoria: this.id_categoria,
        id_cliente: this.id_cliente,
        status: this.status
    }
  }
  
}

export default Servico;