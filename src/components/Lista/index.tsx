import style from "./Lista.module.scss"
import Item from "./item";
import {ITarefa } from "../../Types/Tarefas";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


function Lista({tarefas,selecionaTarefa} : Props){
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => ( 
                    <Item 
                    key={item.id}
                    selecionaTarefa={selecionaTarefa}
                    {...item}
                    />
                )
                )}
            </ul>
        </aside>
    );
}

export default Lista;