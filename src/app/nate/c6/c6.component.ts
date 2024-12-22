import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nate-c6',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './c6.component.html',
  styleUrls: ['./c6.component.css']
})
export class C6ComponentNate {
  @Output() settingsChange = new EventEmitter<any>();
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      ballSize: ['', Validators.required],
      ballAmount: ['', Validators.required],
      ballSpeed: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formValues = this.userForm.value;
      const settings = {
        ballSize: formValues.ballSize ? parseInt(formValues.ballSize, 10) : 10,
        ballAmount: formValues.ballAmount ? parseInt(formValues.ballAmount, 10) : 20,
        ballSpeed: formValues.ballSpeed ? parseInt(formValues.ballSpeed, 10) : 2
      };
      console.log('Form Submitted!', settings);
      this.settingsChange.emit(settings);
    }
  }
}