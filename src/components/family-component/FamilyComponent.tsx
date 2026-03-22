import {simpsons} from "../../data/SimpsonsData.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
import type {ISimpsonModel} from "../../models/ISimpsonModel.ts";

export const FamilyComponent = () => {

    return (
        <>
            {
                simpsons.map((value: ISimpsonModel, index:number) =>
                    <CharacterComponent key = {index} item={value} >
                        {value.info}
                    </CharacterComponent>
                )
            }
        </>
    )
}
