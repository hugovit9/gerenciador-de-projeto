import styles from './NovoProjeto.module.css'
import ProjectForm from '../Projects/ProjectForm'
import {useNavigate} from 'react-router-dom'

function NovoProjeto(){

    const navigate = useNavigate()

    function createPost(project){
        project.cost= 0
        project.service = []

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
        },
        body: JSON.stringify(project)
    }).then((resp) => resp.json())
    .then((data) => {console.log(data)
        navigate('/projects',{state: {message: "Projeto criado com sucesso"}})
    })
    .catch((err) => console.log(err))
    
    }

return(
<div className={styles.novoprojeto_container}>
    <h1>Criar um Projeto</h1>
    <p>Crie seu projeto para depois adicionar os serviços</p>
    <ProjectForm handleSubmit={createPost} btnText='Criar Projeto'></ProjectForm>
</div>

)

}

export default NovoProjeto