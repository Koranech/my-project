import type {FC} from "react";

type PropsType = {
    course: string
}
export const CourseComponent: FC<PropsType> = ({course}) =>{
    return(
        <li>{course}</li>
    )
}
