import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormInputs } from '../components/form';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react'

describe('1- Header do Form', () => {
  afterEach(cleanup)

  it('Verificando se tem <h1> com o título "Teste front-end" .', () => {
    render(<FormInputs/>);    
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Teste front-end');


  });
    
  it('Verificando se existe um botão.', () => {
    render(<FormInputs/>);    
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'submit');
    expect(btnSend).toHaveTextContent('Salvar');
  });
});

describe('2 - Testando os Inputs', () => {
  afterEach(cleanup)

  it('Verificando se o input Nome * foi renderizado.', () => {
    render(<FormInputs/>);    
    const inputName = screen.getByLabelText("Nome *");
    expect(inputName).toBeInTheDocument();
  });
  it('Verificando se o input Data Inicial * foi renderizado.', () => {
    render(<FormInputs/>);    
    const inputDataInicial = screen.getByLabelText("Data Inicial *");
    expect(inputDataInicial).toBeInTheDocument();
  });

  it('Verificando se o input Data Final * foi renderizado.', () => {
    render(<FormInputs/>);    
    const inputDataFinal = screen.getByLabelText("Data Final *");
    expect(inputDataFinal).toBeInTheDocument();
  });

  it('Verificando se o select Propriedade * foi renderizado.', () => {
    render(<FormInputs/>);    
    const inputPropriedade = screen.getByLabelText("Propriedade *");
    expect(inputPropriedade).toBeInTheDocument();
  });

  it('Verificando se o select Laboratório * foi renderizado.', () => {
    render(<FormInputs/>);    
    const inputLaboratorio = screen.getByLabelText("Laboratório *");
    expect(inputLaboratorio).toBeInTheDocument();
  });

  it('Verificando se o text area Obeservações foi renderizado.', () => {
    render(<FormInputs/>);    
    const inputObservacoes = screen.getByLabelText("Observações");
    expect(inputObservacoes).toBeInTheDocument();
  });  
});