import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Customer} from "./Customer";

@Injectable()
export class CustomerService {

  result: any;
  constructor(private http: HttpClient) {}

  addCustomer(firstName, lastName) {
    const uri = 'http://localhost:8080/customers';
    const obj = {
      firstName: firstName,
      lastName: lastName
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getCustomers() {
    const uri = 'http://localhost:8080/customers';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editCustomer(id) {
    const uri = 'http://localhost:8080/customers/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateCustomer(firstName, lastName, id) {
    const uri = 'http://localhost:8080/customers/' + id;

    const obj = {
      firstName: firstName,
      lastName: lastName
    };
    this
      .http
      .put(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCustomer(id) {
    const uri = 'http://localhost:8080/customers/' + id;

        return this
            .http
            .delete(uri)
            .map(res => {
              return res;
            });
  }
}
