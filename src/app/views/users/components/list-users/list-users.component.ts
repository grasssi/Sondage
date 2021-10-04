import { Component, OnInit } from '@angular/core';
import { TableData, UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UserService]
})
export class ListUsersComponent implements OnInit {
  public filterQuery = '';
  error: any;
  public data: TableData;
  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.usersService.users().subscribe(
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

  public users(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  }

  onDelete(id: number) {
    //with Services
    this.usersService.removeuser(id).subscribe((response) => {
      this.ngOnInit();
    },
      (error) => {
        console.log(error);
      }
    );
  }
}
