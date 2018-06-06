import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Customer';
  angForm: FormGroup;
  constructor(private customerservice: CustomerService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ]
   });
  }
  addCustomer(firstName, lastName) {
      this.customerservice.addCustomer(firstName, lastName);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
