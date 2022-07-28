import Botao from '../Botao'
import { CampoTexto } from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const time = ["Departamento Pessoal", "Departamento Fiscal", "Tecnologia da informacão" ]

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
                <ListaSuspensa label="Cargo" itens={time}/>   
                <Botao texto="Criar card"/>                  
            </form>
        </section>
    )
}

export default  Formulario