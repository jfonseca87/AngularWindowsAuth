import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authRslt: string = '';
  authBack: string = 'grey';
  getData: string = '';
  getBack: string = 'grey';
  postData: string = '';
  postBack: string = 'grey';
  putData: string = '';
  putBack: string = 'grey';
  deleteData: string = '';
  deleteBack: string = 'grey';


  constructor(private authService: AuthenticationService,
              private dataService: DataService) {}

  testAuthentication(): void {
    this.authService.getUser().subscribe(
      r => { 
        this.authRslt = r;
        this.authBack = 'success';
      },
      e => {
        console.log(e);
        this.authBack = 'error';
      }
    )
  }

  testGetData(): void {
    this.dataService.getValues().subscribe(
      res => {
        this.getData = res;
        this.getBack = 'success';
      },
      error => {
        console.log(error);
        this.getBack = 'error';
      }
    )
  }

  testPostData(): void {
    this.dataService.saveValue({value: 'Bicycle'}).subscribe(
      res => {
        this.postData = res;
        this.postBack = 'success';
      },
      error => {
        console.log(error);
        this.postBack = 'error';
      }
    )
  }

  testPutData(): void {
    this.dataService.updateValue({value: 'NewsPaper'}).subscribe(
      res => {
        this.putData = res;
        this.putBack = 'success';
      },
      error => {
        console.log(error);
        this.putBack = 'error';
      }
    )
  }

  testDeleteData(): void {
    this.dataService.deleteValue(1).subscribe(
      res => {
        this.deleteData = res;
        this.deleteBack = 'success';
      },
      error => {
        console.log(error);
        this.deleteBack = 'error';
      }
    )
  }

}
