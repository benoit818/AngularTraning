import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../Customer/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './CustomerDetails.component.html',
  styleUrls: []
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer = new Customer();
  @Output() customerChange: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor() { }

  ngOnInit() {
  }

  update() {
    this.customerChange.emit(this.customer);
  }

}
