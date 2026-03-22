import type {ISimpsonModel} from "../../models/ISimpsonModel.ts";
import type {ReactNode} from "react";
import'./CharacterComponent.css'


type CharacterPropsType = {
    item: ISimpsonModel,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterPropsType) => {
    return(
        <div>
        <h2>{item.name} {item.surname}</h2>
        <p>Вік - {item.age}</p>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    )
}
