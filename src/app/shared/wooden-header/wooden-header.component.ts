import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wooden-header',
  templateUrl: './wooden-header.component.html',
  styleUrls: ['./wooden-header.component.scss']
})
export class WoodenHeaderComponent implements OnInit{

  public active : boolean = false

  constructor(){}

  ngOnInit(): void {}

    setActive() :void{
      this.active = !this.active
    }

  }

