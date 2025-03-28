class Funcionario {
  constructor(id_funcionario, cpf, nome, telefone, endereco, email) {
    this.id_funcionario = id_funcionario;
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    this.email = email;
  }

  static validate(funcionarioData) {
    // Validação de nome
    if (funcionarioData.nome.length < 3) {
      throw new Error("O nome deve ter pelo menos 3 caracteres.");
    }
    // Validação de e-mail
    if (!/\S+@\S+\.\S+/.test(funcionarioData.email)) {
      throw new Error("E-mail inválido.");
    }
    // Validação de endereço
    if (funcionarioData.endereco.length < 5) {
      throw new Error("O endereço deve ter pelo menos 5 caracteres.");
    }
    if (funcionarioData.endereco.length > 30) {
      throw new Error("O endereço não pode ter mais de 30 caracteres.");
    }
    // Validação de telefone
    const telefoneRegex = /^\d{9,}$/;
    if (!telefoneRegex.test(funcionarioData.telefone)) {
      throw new Error("O telefone deve ter pelo menos 9 dígitos numéricos.");
    }
    if (funcionarioData.cpf.length === 11 && !validarCpf(funcionarioData.cpf)) {
      throw new Error("CPF inválido.");
    }
  }

  toJSON() {
    return {
      id_funcionario: this.id_funcionario,
      cpf: this.cpf,
      nome: this.nome,
      telefone: this.telefone,
      endereco: this.endereco,
      email: this.email,
    };
  }
}

function validarCpf(cpf) {
  cpf = cpf.replace(/[^\d]/g, "");
  return cpf.length === 11;
}

export default Funcionario;
