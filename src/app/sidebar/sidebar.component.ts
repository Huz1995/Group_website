import { Component, OnInit } from '@angular/core';
import { IconDefinition,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn!: boolean;
  faSignOutAlt: IconDefinition = faSignOutAlt;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout();
    window.location.reload()
  }
}



