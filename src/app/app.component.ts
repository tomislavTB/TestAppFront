import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login/login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  user: any;

  constructor(private router: Router,
    private loginServiceService: LoginServiceService) {

  }

  ngOnInit() {
    this.user = localStorage.getItem('currentUser');
    console.log(JSON.parse(this.user))

  }

  logout() {
    this.loginServiceService.logout();
    this.router.navigate(['/login']);
}

}
