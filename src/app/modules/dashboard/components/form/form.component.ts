import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private utilService: UtilsService) { }

  ngOnInit() {
  }

  onSubmit(registrationForm) {
    this.utilService.snackbarService('Form submitted successfully!');
    registrationForm.reset();
  }

}
