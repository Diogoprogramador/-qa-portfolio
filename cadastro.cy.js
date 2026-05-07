/// <reference types="cypress" />

describe('Testes de Cadastro - Validação de Formulário', () => {
  
  context('Validação de Senha', () => {
    
    const validarSenha = (senha) => {
      const temOitoCaracteres = senha.length >= 8;
      const temNumero = /\d/.test(senha);
      const temMaiuscula = /[A-Z]/.test(senha);
      return temOitoCaracteres && temNumero && temMaiuscula;
    };

    it('Senha válida: 8+ caracteres, número e maiúscula', () => {
      expect(validarSenha('Teste123')).to.be.true;
    });

    it('Senha inválida: menos de 8 caracteres', () => {
      expect(validarSenha('Teste1')).to.be.false;
    });

    it('Senha inválida: sem número', () => {
      expect(validarSenha('SenhaSemNumero')).to.be.false;
    });

    it('Senha inválida: sem maiúscula', () => {
      expect(validarSenha('senha123')).to.be.false;
    });

    it('Senha inválida: vazia', () => {
      expect(validarSenha('')).to.be.false;
    });

  });

  context('Validação de Email', () => {
    
    const validarEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    it('Email válido: formato correto', () => {
      expect(validarEmail('teste@email.com')).to.be.true;
    });

    it('Email inválido: sem @', () => {
      expect(validarEmail('testeemail.com')).to.be.false;
    });

    it('Email inválido: sem domínio', () => {
      expect(validarEmail('teste@')).to.be.false;
    });

    it('Email inválido: espaços em branco', () => {
      expect(validarEmail('teste @email.com')).to.be.false;
    });

  });

  context('Validação de Idade', () => {
    
    const validarIdade = (dataNascimento) => {
      if (!dataNascimento) return true; // Opcional
      
      const hoje = new Date();
      const nascimento = new Date(dataNascimento);
      const idade = hoje.getFullYear() - nascimento.getFullYear();
      return idade >= 18;
    };

    it('Maior de 18 anos: válido', () => {
      expect(validarIdade('2000-01-01')).to.be.true;
    });

    it('Menor de 18 anos: inválido', () => {
      const anoAtual = new Date().getFullYear();
      expect(validarIdade(`${anoAtual - 10}-01-01`)).to.be.false;
    });

    it('Campo vazio (opcional): permitido', () => {
      expect(validarIdade('')).to.be.true;
    });

  });

});
