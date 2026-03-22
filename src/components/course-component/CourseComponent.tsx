import './CourseComponent.css'
import type {FC} from "react";
import type {ICourseModel} from "../../models/ICourseModel.ts";
type PropsType = {
    course: ICourseModel
}

export const CourseComponent: FC<PropsType> = ({course}) => {
    return (
        <li>{course.title} - {course.monthDuration}</li>

    )
}
