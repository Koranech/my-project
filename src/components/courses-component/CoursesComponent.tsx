import {coursesTitleArray} from "../../data/courseTitleArray.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import './CoursesComponent.css'

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesTitleArray.map((course: string, index: number) => {
                    return <CourseComponent course = {course} key = {index} />
                })
            }
        </ul>
    )
}
