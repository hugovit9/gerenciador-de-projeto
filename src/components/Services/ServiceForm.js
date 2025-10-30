import styles from '../Projects/ProjectForm'
import Input from '../Form/input'
import SubmitButton from '../Form/SubmitButton'
import { useState } from 'react'



function ServiceForm({handleSubmit, btnText, projectData}){

    const [service, setService] = useState({})

    function submit(e) {
  e.preventDefault()

  if (!projectData.services) {
    projectData.services = []
  }

  projectData.services.push(service)
  handleSubmit(projectData)
}

    function handleOnchange(e){
        setService({...service,[e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input type='text'
            text='Nome do serviço'
            name='name'
            placeholder='Insira o nome do serviço'
            handleOnchange={handleOnchange}></Input>
                 <Input type='number'
            text='Custo do serviço'
            name='cost'
            placeholder='Insira o valor total'
            handleOnchange={handleOnchange}></Input>
                 <Input type='text'
            text='Descrição do serviço'
            name='description'
            placeholder='Descreva o serviço'
            handleOnchange={handleOnchange}></Input>
            <SubmitButton text={btnText}></SubmitButton>
        </form>
    )
}

export default ServiceForm