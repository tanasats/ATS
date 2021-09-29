import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showFiller = false;

  title = 'ATS';
  isOpenSidenav =false;
  isOpenNevbarMenu = false;

navbar_menu_toggle(){
  // console.log("test");
  // let btn = document.getElementById("navbar-menu-btn") as HTMLElement;
  // btn.click();
  const menuToggle = document.getElementById('navbarSupportedContent');
  menuToggle?.classList.remove("show");
}

  
}
