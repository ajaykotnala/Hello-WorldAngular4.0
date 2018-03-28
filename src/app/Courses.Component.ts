import {Component} from "@angular/core";
import { CoursesService } from "./Courses.service";

@Component({
    selector : 'courses', //<courses>
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `
})


export class CoursesComponent {
 title =  "List of courses";
 courses;
 
 constructor(service: CoursesService){
     //let service = new CoursesService();
     this.courses = service.getCourses();
 }
 getTitle(){
     return this.title;
 }
}