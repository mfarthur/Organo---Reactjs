import './CampoTexto.css'

export const CampoTexto = (props) => {
    return(
        <header className="campotexto">
            <label>{props.label}</label>
            <input placeholder={`${props.placeholder}...`}></input>
        </header>
    )
} 

