import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customer: any;
  angForm: FormGroup;
  title = 'Edit Customer';
  constructor(private route: ActivatedRoute, private router: Router, private service: CustomerService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ]
   });
  }

  updateCustomer(firstName, lastName) {
    this.route.params.subscribe(params => {
    this.service.updateCustomer(firstName, lastName, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customer = this.service.editCustomer(params['id']).subscribe(res => {
        this.customer = res;
      });
    });
  }
}
