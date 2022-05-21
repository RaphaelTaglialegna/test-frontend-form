import React, { FC, useState } from 'react'
import { FormContainer } from './style'
import './index.scss'
import { laboratories, propreties } from './selectsData'


type Props = {}

interface IProprety {
  id: number,
  propretyName: string,
  cnpj: string
}

export const FormInputs: FC<Props> = (_props) => {
  const[ formData, setFormData] = useState(
    {
      nome: '',
      dataInicial: '',
      dataFinal: '',
      infosPropriedade: {
          id: 0,
          nome: '', 
          cnpj: '',
      },
      laboratorio: {
          id: 0,
          nome: ''
      },
      observacoes: ''
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
        ...prevState,
        [name]: value
    }));
  };

  const setProprety = (event: any) => { 
    const value = event.target.value;
    const {id, propretyName, cnpj} = propreties.find((prop) => +prop.id === +value) as IProprety
   
    setFormData((prevState: any) => ({
      ...prevState,
      infosPropriedade: {id, nome:propretyName, cnpj}
    }));
} 

  return (
    <FormContainer>
      <form action="" className='w-4/5 bg-white'>
        <div className=' h-20 bg-teal-700 text-white flex items-center px-5 justify-between'>
          <h2 className=' text-2xl font-bold'>Teste front-end</h2>
          <button className=' font-bold text-2xl bg-teal-500 h-14 w-28'>Salvar</button>
        </div>
        <div className='p-5'>
          <div className="flex flex-wrap -mx-3 mb-10">
            <div className="input w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input 
                type="text"
                className="input-field" 
                required
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                />
              <label className="input-label">Nome *</label>
            </div>
            <div className="input w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input 
                type="date" 
                className="input-field" 
                required
                name="dataInicial"
                value={formData.dataInicial}
                onChange={handleChange}
              />
              <label className="input-label">Data Inicial *</label>
            </div>
            <div className="input w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input 
                type="date" 
                className="input-field" 
                required
                name="dataFinal"
                value={formData.dataFinal}
                onChange={handleChange}
                />
              <label className="input-label">Data Final *</label>
            </div>
          </div>
          
        
          <div className="flex flex-wrap -mx-3 mb-10">          
            <div className="input w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <select 
                className="input-field" id="grid-state"
                name="infosPropriedade"
                onChange={setProprety}

                >
                 {
                   propreties.map(({id, propretyName}) => (
                    <option 
                    key={id}
                    value={id} 
                    >
                      <span>{propretyName}</span>
                    </option>
                   ))
                 }                
                </select>
              <label className="input-label block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                Propriedade *
              </label>
            </div>
            <div className="input w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <select className="input-field" id="grid-state">
                {
                   laboratories.map(({id, laboratoryName}) => (
                    <option key={id}>
                      <span>{laboratoryName}</span>
                    </option>
                   ))
                 }                 
                </select>
              <label className="input-label block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                Laboratório *
              </label>
            </div>
            
          </div>
          <div className="flex flex-wrap -mx-3 mb-10">          
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                Observações
              </label>
              <textarea className=' w-full h-40'/>
            </div>
          </div>
        </div>
      </form>
    </FormContainer>
  )
}
