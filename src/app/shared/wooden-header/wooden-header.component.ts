import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wooden-header',
  templateUrl: './wooden-header.component.html',
  styleUrls: ['./wooden-header.component.scss']
})
export class WoodenHeaderComponent implements OnInit{
  isMenuOpen = false;
  toggleMenu(): void{
    this.isMenuOpen = this.isMenuOpen;
  }
  public active : boolean = false

  constructor(private router: Router){}

  ngOnInit(): void {}

    setActive() :void{
      this.active = !this.active
    }
  navegar(){
    this.router.navigate(['/']);
    this.router.navigate(['/store'])
  }
}