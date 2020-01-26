import { Component, OnInit, ɵɵNgOnChangesFeature,  } from '@angular/core';
import { RecepiedataService } from '../recepiedata.service';
import { RecepieComponent } from '../recepie/recepie.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  courses: RecepieComponent[];
  filteredCourses: RecepieComponent[];
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private data: RecepiedataService) {
    this.courses= data.receps;
  }
  ngOnInit() {
      this.courses = this.data.getreceps();
      this.filteredCourses = this.courses;

      this.messageForm = this.formBuilder.group({
        name: [''],
        description: [''],
        minScore: [0,Validators.min(0)],
        maxScore: [0],
      })

      this.onChanges();
  }

  filterCourses(searchName: string, searchDescription: string, minScore: number, maxScore: number)
  {
      console.log("aa");
      return this.courses.filter(RecepieTemplate=>
        RecepieTemplate.name.toLowerCase().indexOf(searchName.toLowerCase())!== -1
        && RecepieTemplate.description.toLowerCase().indexOf(searchDescription.toLowerCase())!==-1
        && RecepieTemplate.score>=minScore && RecepieTemplate.score<=maxScore);
  }

  onChanges(): void{
    this.messageForm.valueChanges.subscribe(val=>
      {
        this.filteredCourses=  this.filterCourses(
          this.messageForm.controls.name.value,
          this.messageForm.controls.description.value,
          this.messageForm.controls.minScore.value,
          this.messageForm.controls.maxScore.value
          );
      })
  }

  addNewRecep(name: string, image: string, description: string)
  {
    this.data.addNewRecep(name,image, description);
    this.courses=this.data.getreceps();
  }

}

