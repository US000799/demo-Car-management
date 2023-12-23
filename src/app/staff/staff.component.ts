import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  name:String='';
  contact:any;
  address:any;
  designation:any;
  shift:any;
  salary:any;
  array:any=[
    {
      name:"Ujjwal",
      contact:1234567898,
      address:"Pratap nagar",
      designation:"Painter",
      shift:"Day",  
      salary:86500,
    },
    {
      name:"Sam",
      contact:1000000898,
      address:"Bansi nagar",
      designation:"Mechanic",
      shift:"Day",  
      salary:78600,
    },
    {
      name:"Rakesh",
      contact:1234567898,
      address:"Laxmi nagar",
      designation:"Mechanic",
      shift:"Evening",  
      salary:53200,
    },
    {
      name:"Lakhan",
      contact:1234567898,
      address:"Indra nagar",
      designation:"Cleaner",
      shift:"Day",  
      salary:20000,
    },
    {
      name:"Seeta",
      contact:1234000000,
      address:"Vasudev nagar",
      designation:"Counter Person",
      shift:"Day",  
      salary:45300,
    },
    {
      name:"Rohit",
      contact:1390011111,
      address:"Pune",
      designation:"Security Guard",
      shift:"Day",  
      salary:66600,
    },
    
  ];
  alert=false;

  selectIndex:any;
  selectObj:any;

  submitButton=true;
  updateButton=false;

  submit(){
    let obj={
      name:this.name,
      contact:this.contact,
      address:this.address,
      designation:this.designation,   
      shift:this.shift,
      salary:this.salary,
    }
    this.array.push(obj);
    this.alert=true;
    
    this.clear();
    console.log("submitted..",this.array)
  }

  clear(){
    this.name="";
    this.contact="";
    this.address="";
    this.designation="";
    this.shift="";
    this.salary="";
    
  }


  edit(index:any, editObj:any){
    this.selectIndex=index;
    this.selectObj=editObj;
    this.name=editObj.name;
    this.contact=editObj.contact;
    this.address=editObj.address;
    this.designation=editObj.designation;
    this.shift=editObj.shift;
    this.salary=editObj.salary;
    this.submitButton=false;
    this.updateButton=true;
  }

  delete(index:any){
    this.array.splice(index,1);
    console.log("deleted row..", index);
  }

  update(){
    this.array[this.selectIndex].name=this.name;
    this.array[this.selectIndex].contact=this.contact;
    this.array[this.selectIndex].address=this.address;
    this.array[this.selectIndex].designation=this.designation;
    this.array[this.selectIndex].shift=this.shift;
    this.array[this.selectIndex].salary=this.salary;
    this.submitButton=true;
    this.updateButton=false;
    this.clear();
    console.log("updated...",this.name);
    console.log("updated...",this.contact);
    console.log("updated...",this.address);
    console.log("updated...",this.designation);
    console.log("updated...",this.shift);
    console.log("updated...",this.salary);
    }

    cross(){
      this.alert=false;
    }

    searchText:any;
}
