import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carname:String='';
  brand:any;
  hpower:any;
  mileage:any;
  seats:any;
  price:any;
  array:any=[
    {
      carname:"R18",
      brand:"Audi",
      hpower:627,
      mileage:19,
      seats:2,  
      price:8650000,
    },
    {
      carname:"X90",
      brand:"Ferrari",
      hpower:675,
      mileage:17,
      seats:2,  
      price:78600000,
    },
    {
      carname:"Ram Chandra",
      brand:"Lamborghini",
      hpower:735,
      mileage:11,
      seats:2,  
      price:53200000,
    },
    {
      carname:"H81",
      brand:"Bentley",
      hpower:687,
      mileage:13,
      seats:2,  
      price:2000000,
    },
    {
      carname:"C-08",
      brand:"Pagani",
      hpower:240,
      mileage:15,
      seats:4,  
      price:4530000,
    },
    {
      carname:"Z-8",
      brand:"MC Laren",
      hpower:564,
      mileage:4,
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
      hpower:this.hpower,
      mileage:this.mileage,   
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
    this.hpower="";
    this.mileage="";
    this.seats="";
    this.price="";
    
  }


  edit(index:any, editObj:any){
    this.selectIndex=index;
    this.selectObj=editObj;
    this.carname=editObj.carname;
    this.brand=editObj.brand;
    this.hpower=editObj.hpower;
    this.mileage=editObj.mileage;
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
    this.array[this.selectIndex].hpower=this.hpower;
    this.array[this.selectIndex].mileage=this.mileage;
    this.array[this.selectIndex].seats=this.seats;
    this.array[this.selectIndex].cibil=this.price;
    this.submitButton=true;
    this.updateButton=false;
    this.clear();
    console.log("updated...",this.carname);
    console.log("updated...",this.brand);
    console.log("updated...",this.hpower);
    console.log("updated...",this.mileage);
    console.log("updated...",this.seats);
    console.log("updated...",this.price);
    }

    cross(){
      this.alert=false;
    }

    searchText:any;
}
