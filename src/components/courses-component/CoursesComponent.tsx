import './CoursesComponent.css'
import type {ICourseModel} from "../../models/ICourseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import {coursesArray} from "../../data/CoursesData.ts";

export const CoursesComponent = () => {

        return(
            <>
            {
                coursesArray.map((course: ICourseModel, index: number) => {
                    return <CourseComponent course = {course} key = {index}/>
                })
            }
            </>
        )
}
