import './CoursesComponent.css'
import {coursesAndDurationArray} from "../../data/CoursesData.ts";
import type {ICourseModel} from "../../models/ICourseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {

        return(
            <ul>
            {
                coursesAndDurationArray.map((course: ICourseModel, index: number) => {
                    return <CourseComponent course = {course} key = {index}/>
                })
            }
            </ul>
        )
}
