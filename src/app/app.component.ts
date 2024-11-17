import { EmployeeModel } from './model/Employee';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeForm: FormGroup = new FormGroup({});

  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];

  constructor(){
    this.createForm();
    debugger;
    const oldData = localStorage.getItem("EmpData");
    if (oldData != null){
       const parseData = JSON.parse(oldData);
       this.employeeList = parseData;
    }
  }

  createForm(){
    this.employeeForm = new FormGroup({
      empid: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name),
      city: new FormControl(this.employeeObj.city),
      address: new FormControl(this.employeeObj.address),
      contactNo: new FormControl(this.employeeObj.contactNo),
      emailId: new FormControl(this.employeeObj.emailId),
      pinCode: new FormControl(this.employeeObj.pinCode),
      state: new FormControl(this.employeeObj.state),
    })
  }

  onSave(){
    debugger;
    const oldData = localStorage.getItem("EmpData");
    if(oldData != null) {
      const parseData = JSON.parse(oldData);
      this.employeeForm.controls['empid'].setValue(parseData.length +1);
      this.employeeList.unshift(this.employeeForm.value);
    }else{
      this.employeeList.unshift(this.employeeForm.value);
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList))
  }
}
