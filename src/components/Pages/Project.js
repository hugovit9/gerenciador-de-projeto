import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../Projects/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../Services/ServiceForm'
import { v4 as uuidv4 } from 'uuid'
import ServiceCard from '../Services/ServiceCard'


function Project(){
    const {id} = useParams()

    const [project, setProject] = useState({}) // Alterado para objeto vazio
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [services, setServices] = useState([])

    useEffect(() =>{
        // Aumentei o tempo do setTimeout, mas o ideal é remover o setTimeout em produção
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers:{'Content-Type' : 'application/json'
            },
        }).then((resp)=> resp.json())
            .then((data) =>{
                setProject(data)
                setServices(data.services || []) // Garante que services é no mínimo um array vazio
            })
        .catch((err) => console.log(err))
        }, 300) // Reduzi para 300ms para teste
    }, [id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function removeService(id, cost){
        // Adiciona verificação de segurança antes de tentar acessar 'services'
        if (!project.services) {
            console.log("project.services está undefined.")
            return
        }

        const servicesUpdated = project.services.filter(
            (service) => service.id !== id)

        const projectUpdated = { ...project } // Cria uma cópia para evitar mutação direta

        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`,{
            method:'PATCH',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(projectUpdated),
        }).then((resp) => resp.json())
        .then(() => {
            setProject(projectUpdated)
            setServices(servicesUpdated)
            setMessage('Serviço removido com sucesso!')
            setType('success')
        })
        .catch((err) => console.log(err))
    }

    function createService(project) {
        if (!project.services) {
            project.services = []
        }

        // Adiciona uma verificação para garantir que o array não está vazio antes de acessar o último
        if (project.services.length === 0) {
            setMessage('O serviço não foi adicionado corretamente ao projeto.')
            setType('error')
            return false
        }

        const lastService = project.services[project.services.length - 1] // Correção de segurança aplicada
        lastService.id = uuidv4()

        const lastServiceCost = parseFloat(lastService.cost)
        const newCost = parseFloat(project.cost) + lastServiceCost

        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...project, cost: newCost }),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowServiceForm(false)
            setMessage('Serviço adicionado com sucesso!')
            setType('success')
        })
        .catch((err) => console.log(err))
    }

    function editPost(project){
        setMessage('')
        
        if (project.budget < project.cost){
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }
        
        fetch(`http://localhost:5000/projects/${project.id}`,{
            method:'PATCH',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado!')
            setType('success')
            setShowProjectForm(false)
        }).catch((err) => console.log(err))
    }

    return(
        <>
        {project.name ? (
            <div className={styles.project_details}> 
                <Container customClass="column">
                    {message && <Message type={type} msg={message}></Message>}
                <div className={styles.details_container}>
                    <h1>Projeto: {project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>
                    {!showProjectForm ? (
                        <div className={styles.project_info}> 
                            <p>
                                <span>Categoria: </span> {project.category?.name}
                            </p>
                            <p>
                                <span>Total de Orçamento: </span> R$: {project.budget}
                            </p>
                            <p>
                                <span>Total Utilizado</span> R$: {project.cost}
                            </p>
                        </div>
                    ) : (
                        <div className={styles.project_info}>
                            <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project}></ProjectForm>
                            </div>
                    )}
                </div>
                <div className={styles.details_container}>
                    <h2>Adicione um serviço: </h2>
                    <button className={styles.btn} onClick={toggleServiceForm}>{!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                    </button>
                    <div className={styles.project_info}>
                    {showServiceForm && (
                        <ServiceForm
                        handleSubmit={createService}
                        btnText='Adicionar serviço'
                        projectData={project}></ServiceForm>
                    )}
                    </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start" >
                        {services.length > 0 &&
                        services.map((service) => (
                            <ServiceCard
                            id={service.id}
                            name={service.name}
                            cost={service.cost}
                            description={service.description}
                            key={service.id}
                            handleRemove={removeService}></ServiceCard>
                        ))
                        }
                        {services.length === 0 && <p>Não há serviços cadastrados.</p>

                        }
                    </Container>
                </Container>
            </div> 
        ) :(
            <Loading></Loading>
        )}
        </>
    )
    
}

export default Project