import { Component, OnInit } from '@angular/core';
import { OwnerService, TableData } from '../../../../services/owner.service';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.css'],
  providers: [OwnerService]
})
export class ListOwnersComponent implements OnInit {
  public filterQuery = '';
  error: any;
  public data: TableData;
  constructor(private ownerService: OwnerService) {}

  ngOnInit(): void {
    this.ownerService.allowners().subscribe(
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
    this.ownerService.removeowner(id).subscribe((response) => {
      this.ngOnInit();
    },
      (error) => {
        console.log(error);
      }
    );
  }
}
