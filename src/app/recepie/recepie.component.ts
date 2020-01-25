import { Component, OnInit, Input, Output,ElementRef } from '@angular/core';
import { HostListener  } from "@angular/core";
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {

  rolled: boolean=true;
  score: number = 0;
  name: string;
  image: string;
  description: string;
  id: number;

  constructor(name: string, image: string, description: string, id: number) { 
    this.name=name;
    this.image=image;
    this.description=description;
    this.id=id;
  }


  scoreUp(){
    this.rolled=!this.rolled;
    this.score++;
  }

  scoreDown()
  {
    this.rolled=!this.rolled;
    this.score--;
  }

  ngOnInit() {
  }

}
