import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-question-form',
  templateUrl: './create-question-form.component.html',
  styleUrls: ['./create-question-form.component.css']
})
export class CreateQuestionFormComponent implements OnInit {
  rfQuestion: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rfQuestion = this.fb.group({
      question: this.fb.control('', [Validators.required]),
    });
  }

  onSubmit(){
    console.log();
  }

}
