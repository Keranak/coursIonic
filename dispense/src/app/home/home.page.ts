import {Component, ViewChild} from '@angular/core';
import {Validators,  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {IonModal} from "@ionic/angular";
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
 total=0;
  dispense=[];
  addDispense(f: NgForm){
    this.dispense.push(f.value);
    this.total+=f.value.amount;
    f.reset();

  }

  @ViewChild(IonModal) modal: IonModal;

  message: any;
  type: string;
  amount: any;
  data=[];
  entry=[];

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {

    this.data.push(this.type);
    this.data.push(this.amount);
    this.amount="";
    this.type="";

    this.entry.push(this.data);
    this.data=[];
    console.log(this.entry);

    this.cancel();

  }

  // Montant total
  getTotal(){
    let total=0;
    for(let i=0; i<this.entry.length; i++){
      total+=this.entry[i][1];
    }
    return total;
  }

  

}
