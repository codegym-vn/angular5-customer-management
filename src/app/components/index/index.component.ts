import { CustomerService } from '../../customer.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../Customer';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  customers: any;

  constructor(private http: HttpClient, private service: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.service.getCustomers().subscribe(res => {
      this.customers = res;
    });
  }

  deleteCustomer(id) {
    this.service.deleteCustomer(id).subscribe(res => {
      const index = this.customers.findIndex(function (value, i, obj) {
        return value.id === id;
      });
      if (index !== -1) {
        this.customers.splice(index, 1);
      }
    });
  }
}
