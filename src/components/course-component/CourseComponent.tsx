import './CourseComponent.css'
import type {FC} from "react";
import type {ICourseModel} from "../../models/ICourseModel.ts";
type PropsType = {
    course: ICourseModel
}

export const CourseComponent: FC<PropsType> = ({course}) => {
    return (
       <div>
           <h2>{course.title}</h2>
           <p>Триває {course.monthDuration} місяців</p>
           <p>Триває {course.hourDuration} годин</p>
           <ul>
           {
               course.modules.map((module:string, index: number) => <li key={index}>{module}</li>)
           }
           </ul>
       </div>

    )
}
