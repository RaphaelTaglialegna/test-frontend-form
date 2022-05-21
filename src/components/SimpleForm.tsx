import React, { FC } from 'react'
import { FormInputs } from './form'
import { Header } from './header'

type Props = {}

export const SimpleForm: FC<Props> = (props) => {
  return (
    <div className=' bg-slate-100 h-screen w-screen flex flex-col content-center'>
      <Header/>
      <FormInputs />
    </div>
  )
}
