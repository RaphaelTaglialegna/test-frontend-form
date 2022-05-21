import React, { FC, useState } from 'react'
import { FormContainer } from './style'
import './index.scss'
import { laboratories, propreties } from './selectsData'


type Props = {}

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
              <input type="text" className="input-field" required/>
              <label className="input-label">Nome *</label>
            </div>
            <div className="input w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input type="date" className="input-field" required />
              <label className="input-label">Data Inicial *</label>
            </div>
            <div className="input w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input type="date" className="input-field" required />
              <label className="input-label">Data Final *</label>
            </div>
          </div>
          
        
          <div className="flex flex-wrap -mx-3 mb-10">          
            <div className="input w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <select className="input-field" id="grid-state">
                 {
                   propreties.map(({id, propretyName}) => (
                    <option key={id}>
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
