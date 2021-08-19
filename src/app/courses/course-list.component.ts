import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit{
  
    
    courses: Course[] = [];


    ngOnInit(): void {
    this.courses = [
            {
                id: 1,
                name: 'Java Básico',
                imageUrl: 'assets/images/java.png',
                price: 99.99,
                code: 'JAV-8799',
                duration: 120,
                rating: 4.5,
                releaseDate: 'April, 2 2019'
            },
            {
                id: 2,
                name: 'Laravel 8',
                imageUrl: 'assets/images/laravel.png',
                price: 49.99,
                code: 'LAR-8799',
                duration: 80,
                rating: 3.2,
                releaseDate: 'April, 25 2019'
             },

             {
                 id: 3,
                 name: 'Angular - Avançado',
                 imageUrl: 'assets/images/angular.png',
                 price: 12.99,
                 code: 'ANG-1206',
                 duration: 120,
                 rating: 2.2,
                 releaseDate: 'May, 1 2021'
             }


            ]

        }
}