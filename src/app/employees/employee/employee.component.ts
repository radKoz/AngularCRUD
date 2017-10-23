import { EmployeeService } from '../shared/employee.service';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm()
  }

  onSubmit(form: NgForm) {
    if (form.value.$key == null)
      this.employeeService.instertEmployee(form.value)

    else
      this.employeeService.updateEmployee(form.value)


    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = {
        $key: null,
        name: '',
        position: '',
        office: '',
        salary: 0
      }
    }
  }

  onDelete(form: NgForm) {
    if(confirm("Are you sure you want to delete this record?") == true ) {
      this.employeeService.deleteEmployee(form.value.$key);
      this.resetForm(form);
    }
  }

}
