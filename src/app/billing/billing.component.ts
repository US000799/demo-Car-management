import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  carname:String='';
  brand:any;
  customername:any;
  contact:any;
  seats:any;
  price:any;
  array:any=[
    {
      carname:"R18",
      brand:"Audi",
      customername:"Shiva",
      contact:196788679,
      seats:2,  
      price:8650000,
    },
    {
      carname:"X90",
      brand:"Ferrari",
      customername:"Lalit",
      contact:172344252,
      seats:2,  
      price:78600000,
    },
    {
      carname:"Ram Chandra",
      brand:"Lamborghini",
      customername:"Ujjwal",
      contact:1235252341,
      seats:2,  
      price:53200000,
    },
    {
      carname:"H81",
      brand:"Bentley",
      customername:"Laxman",
      contact:13,
      seats:2,  
      price:2000000,
    },
    {
      carname:"C-08",
      brand:"Pagani",
      customername:"Seeta",
      contact:1541243243,
      seats:4,  
      price:4530000,
    },
    {
      carname:"Z-8",
      brand:"MC Laren",
      customername:"Ram",
      contact:442342524,
      seats:33,  
      price:6660000,
    },
    
  ];
  alert=false;

  selectIndex:any;
  selectObj:any;

  submitButton=true;
  updateButton=false;

  submit(){
    let obj={
      carname:this.carname,
      brand:this.brand,
      customername:this.customername,
      contact:this.contact,   
      seats:this.seats,
      price:this.price,
    }
    this.array.push(obj);
    this.alert=true;
    
    this.clear();
    console.log("submitted..",this.array)
  }

  clear(){
    this.carname="";
    this.brand="";
    this.customername="";
    this.contact="";
    this.seats="";
    this.price="";
    
  }


  edit(index:any, editObj:any){
    this.selectIndex=index;
    this.selectObj=editObj;
    this.carname=editObj.carname;
    this.brand=editObj.brand;
    this.customername=editObj.customername;
    this.contact=editObj.contact;
    this.seats=editObj.seats;
    this.price=editObj.price;
    this.submitButton=false;
    this.updateButton=true;
  }

  delete(index:any){
    this.array.splice(index,1);
    console.log("deleted row..", index);
  }

  update(){
    this.array[this.selectIndex].name=this.carname;
    this.array[this.selectIndex].brand=this.brand;
    this.array[this.selectIndex].customername=this.customername;
    this.array[this.selectIndex].contact=this.contact;
    this.array[this.selectIndex].seats=this.seats;
    this.array[this.selectIndex].cibil=this.price;
    this.submitButton=true;
    this.updateButton=false;
    this.clear();
    console.log("updated...",this.carname);
    console.log("updated...",this.brand);
    console.log("updated...",this.customername);
    console.log("updated...",this.contact);
    console.log("updated...",this.seats);
    console.log("updated...",this.price);
    }

    cross(){
      this.alert=false;
    }

    searchText:any;
}
