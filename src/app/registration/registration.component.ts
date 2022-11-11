import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public icon: string;
  public type: string;
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private register: ApiService) {

    this.form = this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
      LastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      // Phone: [''],
      // CountryId: [''],
      // StateId: [''],
      // CityId: [''],
      // UserTypeId: [''],
      // DisplayPicture: ['']

    })



    this.icon = 'eye-slash';
    this.type = 'password';
  }

  ngOnInit(): void {
  }
  /**
     * password hide and show feature
     */
  onEyeClick() {
    if (this.icon === 'eye-slash') {
      this.icon = 'eye';
      this.type = 'text';
    } else {
      this.icon = 'eye-slash';
      this.type = 'password';
    }
  };

  createAccount() {
    console.log(this.form);

    if (this.form.valid) {
      this.register.postNewUser(this.form.value).subscribe((res) => { })
      console.log('submitted');

    }
  }


}
