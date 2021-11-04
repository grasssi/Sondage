import { Component, OnInit } from '@angular/core';
import { InformatiqueService, TableData} from '../../../../services/informatique.service';
@Component({
  selector: 'app-liste-materiel',
  templateUrl: './liste-materiel.component.html',
  styleUrls: ['./liste-materiel.component.css']
})
export class ListeMaterielComponent implements OnInit {
  public filterQuery = '';
  error: any;
  public data: TableData;
  constructor(private infoService: InformatiqueService) {}
    
    ngOnInit(): void {
      const res=this.infoService.allmatInfos().subscribe(
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
    this.infoService.removeminfo(id).subscribe((response) => {
      this.ngOnInit();
    },
      (error) => {
        console.log(error);
      }
    );
  }
  public getDate(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: '2-digit'});
  }
}
