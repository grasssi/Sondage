import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../../../services/application.service';
import { TableData } from '../../../../services/application.service';
@Component({
  selector: 'app-list-application',
  templateUrl: './list-application.component.html',
  styleUrls: ['./list-application.component.css']
})
export class ListApplicationComponent implements OnInit {
  public filterQuery = '';
  error: any;
  public data: TableData;
  constructor(private appService: ApplicationService) {}

  ngOnInit(): void {
    const res=this.appService.allApplication().subscribe(
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

  public owners(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  }

  onDelete(id: number) {
    //with Services
    this.appService.removeApplication(id).subscribe((response) => {
      this.ngOnInit();
    },
      (error) => {
        console.log(error);
      }
    );
  }
}
