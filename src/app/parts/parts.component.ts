import { Component } from '@angular/core';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent {
  partName:String='';
  warranty:any;
  mrp:any;
  quantity:any;
  array:any=[
    {
      partName:"Tire",
      warranty:1,
      mrp:2561,
      quantity:1,
    },
    {
      partName:"Seats",
      warranty:2,
      mrp:21000,
      quantity:4,
    },
    {
      partName:"Paint",
      warranty:2,
      mrp:2000,
      quantity:4,
    },
    {
      partName:"Headlight",
      warranty:1,
      mrp:870,
      quantity:2,
    },
    {
      partName:"Battery",
      warranty:2,
      mrp:2800,
      quantity:1,
    },
    {
      partName:"Brake Wire",
      warranty:1,
      mrp:2,
      quantity:1,
    },
  ];
  alert=false;

  selectIndex:any;
  selectObj:any;

  submitButton=true;
  updateButton=false;

  submit(){
    let obj={
      partName:this.partName,
      warranty:this.warranty,
      mrp:this.mrp,
      quantity:this.quantity,
    }
    this.array.push(obj);
    this.alert=true;
    
    this.clear();
    console.log("submitted..",this.array)
  }

  clear(){
    this.partName="";
    this.warranty="";
    this.mrp="";
    this.quantity="";
    
  }


  edit(index:any, editObj:any){
    this.selectIndex=index;
    this.selectObj=editObj;
    this.partName=editObj.partName;
    this.warranty=editObj.income;
    this.mrp=editObj.mrp;
    this.quantity=editObj.quantity;
    this.submitButton=false;
    this.updateButton=true;
  }

  delete(index:any){
    this.array.splice(index,1);
    console.log("deleted row..", index);
  }

  update(){
    this.array[this.selectIndex].partName=this.partName;
    this.array[this.selectIndex].warranty=this.warranty;
    this.array[this.selectIndex].mrp=this.mrp;
    this.array[this.selectIndex].quantity=this.quantity;
    this.submitButton=true;
    this.updateButton=false;
    this.clear();
    console.log("updated...",this.partName);
    console.log("updated...",this.warranty);
    console.log("updated...",this.mrp);
    console.log("updated...",this.quantity);
    }

    cross(){
      this.alert=false;
    }

    searchText:any;
}
