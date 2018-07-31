import { Component, OnInit } from '@angular/core';

import {CloudstarxService} from '../cloudstarx.service';
import {Place} from '../place';
import {Route} from '../route';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  places: Place[] = [];
  routes: Route[] = [];

  constructor(private cloudstarxService: CloudstarxService) { }

  ngOnInit() {
    this.findAllPlaces();
    this.findAllRoutes();
  }

  findAllPlaces(): void {
    this.cloudstarxService.findAllPlaces()
      .subscribe(places => this.places = places);
  }

  findAllRoutes(): void {
    this.cloudstarxService.findAllRoutes()
      .subscribe(routes => this.routes = routes);
  }

}
