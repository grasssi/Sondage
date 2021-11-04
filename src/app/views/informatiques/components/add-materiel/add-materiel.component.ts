import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { ApplicationService } from '../../../../services/application.service';
import { InformatiqueService } from '../../../../services/informatique.service';
import { MarquesService } from '../../../../services/marques.service';
import { OwnerService } from '../../../../services/owner.service';
import { RamService } from '../../../../services/ram.service';
import { ServiceService } from '../../../../services/service.service';
import { SystemeService } from '../../../../services/systeme.service';
import { TypesService } from '../../../../services/types.service';
import { ValidationFormsService } from '../../../forms/validation-forms/validation-forms.service';

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent implements OnInit {
  submitted = false;
  formErrors: any;
  myRes: any;
  myTypes: any;
  idTypes: any;
  myMarques: any;
  myApps: any;
  myRam: any;
  mySysteme: any;
  myfindMarques: any;
  myOwners: any;
  matForm = new FormGroup({
    type: new FormControl(),
    Marque: new FormControl(),
    service: new FormControl(),
    SerialNumber: new FormControl(),
    owner: new FormControl(),
    ram: new FormControl(),
    systeme: new FormControl(),
    domaine: new FormControl(),
    application: new FormControl(),
    situation: new FormControl(),
    accept: new FormControl(false, Validators.requiredTrue)
  });

  constructor(private toasterService: ToasterService,
    private router: Router,
    private ownerservice: OwnerService,
    private serviceservice: ServiceService,
    private typeservice: TypesService,
    private systemeservice: SystemeService,
    private applicationservice: ApplicationService,
    private ramservice: RamService,
    private marqueservice: MarquesService,
    private infoservice: InformatiqueService,
    public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;

  }
  ngOnInit(): void {
    this.allservices();
    this.alltypes();
    this.allmarques();
    this.allowners();
    this.allram();
    this.allsystemes();
    this.allapplication();
  }

  get f() { return this.matForm.controls; }

  //get all services
  allservices() {
    this.serviceservice.allServices().subscribe((response: any) => {
      this.myRes = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //get all applications
  allapplication() {
    this.applicationservice.allApplication().subscribe((response: any) => {
      this.myApps = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //get all systeme
  allsystemes() {
    this.systemeservice.allSysteme().subscribe((response: any) => {
      this.mySysteme = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //get all ram
  allram() {
    this.ramservice.allram().subscribe((response: any) => {
      this.myRam = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //get all types
  alltypes() {
    this.typeservice.alltypes().subscribe((response: any) => {
      this.myTypes = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //get all marques
  allmarques() {
    this.marqueservice.allmarques().subscribe((response: any) => {
      this.myMarques = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //find marques by type
  findmarques() {
    this.marqueservice.findMarques(this.matForm.value.type).subscribe((response: any) => {
      this.myfindMarques = response
      console.log(this.myfindMarques);

    },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //get all owners
  allowners() {
    this.ownerservice.allowners().subscribe((response: any) => {
      this.myOwners = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }

  addmatInfo() {
    this.submitted = true;
    if (this.matForm.invalid) {
      return
    };
    //with Services
    console.log('tetstsst=', this.matForm.value);

    const addowner = this.infoservice.addmatInfo(this.matForm.value).subscribe((response: any) => {
      this.toasterService.pop('success', 'Success Login', response.message);
      // this.affectService(this.matForm.value)
      this.router.navigate(['/informatiques/listmateriels']);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }

  onReset() {

    this.submitted = false;
    this.matForm.reset();

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.matForm.invalid) {
      return;
    }

  }
}
