import type {FC} from "react";
import './CourseComponent.css'
type PropsType = {
    course: string
}
export const CourseComponent: FC<PropsType> = ({course}) =>{
    return(
        <li>{course}</li>
    )
}
