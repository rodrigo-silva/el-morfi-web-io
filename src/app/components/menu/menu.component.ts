import { Component, OnInit } from '@angular/core';
import { Plato } from '../../model/plato';
import { ApplicationService } from '../../service/application.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public menu: Array<Plato> = [];

  constructor(private srv: ApplicationService) {}

  ngOnInit() {
    this.menu = this.srv.getMenu();
  }
}
