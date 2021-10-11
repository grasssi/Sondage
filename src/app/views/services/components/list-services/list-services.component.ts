import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../services/service.service';
import { TableData } from '../../../tables/datatable/datatable.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  public filterQuery = '';
  error: any;
  public data: TableData;
  constructor(private Service: ServiceService) {}

  ngOnInit(): void {
    this.Service.allServices().subscribe(
        (data: TableData) => {
          setTimeout(() => {
            this.data = [...data];
          }, 1000);
        }, // success path

        error => this.error = error // error path

      );
  }

  public toInt(num: string) {
    return +num;
  }
  public sortByWordLength = (a: any) => {
    return a.Firstname.length;
  }

  public allservices(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  }

  onDelete(id: number) {
    //with Services
    this.Service.removeservice(id).subscribe((response) => {
      this.ngOnInit();
    },
      (error) => {
        console.log(error);
      }
    );
  }
}
