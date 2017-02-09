import { HasDirtyChecking } from '../prevent-unsaved-changes-guard.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, HasDirtyChecking {
  form: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.form = this.builder.group({
      user: new FormGroup({       
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('')   
      }),
      address: new FormGroup({
        street: new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl('', Validators.pattern(/^$|[0-9]{5}\-[0-9]{3}/g))
      })
    });
  }

  addUser() {
    console.log(this.form.controls);
  }

  hasUnsavedChanges(): boolean {
    return this.form.dirty;
  }
}
