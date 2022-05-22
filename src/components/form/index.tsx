import React, { FC, useEffect, useState } from 'react'
import { FormContainer } from './style'
import './index.scss'
import { laboratories, propreties } from './selectsData'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';


type Props = {}

type Inputs = {
  nome: string,
  dataInicial: string,
  dataFinal: string,
  infosPropriedade: number
  laboratorio: number
  observacoes: string
}
interface IProprety {
  id: number | string,
  nome: string,
  cnpj: string
}

// interface ILaboratory {
//   id: number | string,
//   laboratoryName: string,
// }

export const FormInputs: FC<Props> = (_props) => {
  const [readToSent, setReadToSent] = useState(false);

  const { register, formState: { errors }, handleSubmit } = useForm<Inputs>();
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
  const onSubmit: SubmitHandler<Inputs> = data => {
  const { nome, dataInicial, dataFinal, infosPropriedade, laboratorio, observacoes} = data;
    
    setFormData({...formData, nome, dataInicial, dataFinal, observacoes })
    setLaboratory(laboratorio);
    setProprety(infosPropriedade);
    setReadToSent(true)
  };

  useEffect(() => {
    if (readToSent) {
      sentDataForm()
      setReadToSent(false)
    }
}, [readToSent]);


  const notifyError = () => toast.error('Campos obrigarórios devem ser preenchidos!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme:"colored",
          });

  function sentDataForm () { 
    toast.success('Cadastro realizado com sucesso!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:"colored",
      });
    console.log(formData)
  }

  const setProprety = (propretyId: number) => { 
    
    const {id, propretyName, cnpj} = propreties.find((prop) => +prop.id === +propretyId) as any
   
    setFormData((prevState: any) => ({
      ...prevState,
      infosPropriedade: {id, nome:propretyName, cnpj}
    }));
} 
  const setLaboratory = (laboratoryId: number) => { 
  
    const {id, laboratoryName} = laboratories.find((prop) => +prop.id === +laboratoryId) as any
  
    setFormData((prevState: any) => ({
      ...prevState,
      infosPropriedade: {id, nome:laboratoryName,}
    }));
  } 

  return (
    
    <FormContainer>
      <form 
      action="" 
      className='w-4/5 bg-white'
      onSubmit={handleSubmit(onSubmit)}
      >

        <div className=' h-20 bg-teal-700 text-white flex items-center px-5 justify-between'>
          <h2 className=' text-2xl font-bold'>Teste front-end</h2>
          <button 
            className=' font-bold text-2xl bg-teal-500 h-14 w-28'
            type="submit"
            >
            Salvar
          </button>
        </div>
        <div className='p-5'>
          <div className="flex flex-wrap -mx-3 mb-10">
            <div className="input w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input 
                type="text"
                className="input-field" 
                required
                {...register("nome", { required: "Error"})}
                />
             
              <label id="nome" className="input-label">Nome *</label>
              <ErrorMessage
                errors={errors}
                name="nome"
                render={({ message }) => <span>{message}</span>}
              />
             {errors.nome && notifyError()}

            </div>
            <div className="input w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input 
                type="date" 
                className="input-field" 
                required
                {...register("dataInicial", { required: "Error"})}
                />
              <label className="input-label">Data Inicial *</label>
              <ErrorMessage
                errors={errors}
                name="dataInicial"
                render={({ message }) => <span>{message}</span>}
              />

            </div>
            <div className="input w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input 
                type="date" 
                className="input-field" 
                required
                {...register("dataFinal", { required: "Error"})}
                />
              <label className="input-label">Data Final *</label>
            </div>
            <ErrorMessage
                errors={errors}
                name="dataFinal"
                render={({ message }) => <span>{message}</span>}
              />
          </div>
          
        
          <div className="flex flex-wrap -mx-3 mb-10">          
            <div className="input w-full md:w-1/2 px-3 mb-6 md:mb-0">

            <select 
                className="input-field" 
                id="grid-state"
                {...register("infosPropriedade", { required: "Error."})}
                >
                <option className='op'/>
                 {
                   propreties.map(({id, propretyName}) => (
                     <option key={id} value={id} >
                      <span>{propretyName}</span>
                    </option>
                   ))
                  }                
                </select>

              <label className="input-label block tracking-wide text-gray-700 text-ls font-bold mb-2" htmlFor="grid-state">
                Propriedade *
              </label>
              <ErrorMessage
                errors={errors}
                name="infosPropriedade"
                render={({ message }) => <span>{message}</span>}
              />
            </div>
            <div className="input w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <select
              {...register("laboratorio", { required: true})}
              className="input-field" 
              id="grid-state"
              >
              <option className='op'/>
              {
                laboratories.map(({id, laboratoryName}) => (
                  <option key={id} value={id}>
                    <span>{laboratoryName}</span>
                  </option>
                  ))
                }                 
              </select>
              <label className="input-label block tracking-wide text-gray-700 text-ls font-bold mb-2" htmlFor="grid-state">
                Laboratório *
              </label>
                {errors.laboratorio && <span>Error</span>}

            </div>
            
          </div>
          <div className="flex flex-wrap -mx-3 mb-10">          
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-gray-700 text-ls font-bold mb-2" htmlFor="grid-state">
                Observações
              </label>
              <textarea className=' w-full h-40'
               {...register("observacoes")}
               />
            </div>
          </div>
        </div>
 
      {errors.infosPropriedade && notifyError()}
      {errors.laboratorio && notifyError()}


      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />  
      </FormContainer>
  )
}
