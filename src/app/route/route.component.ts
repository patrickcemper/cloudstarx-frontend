import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CloudstarxService} from '../cloudstarx.service';

import {Route} from '../route';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  route: Route;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cloudstarxService: CloudstarxService
  ) { }

  ngOnInit(): void {
    this.getRoute();
  }

  getRoute(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.cloudstarxService.getRoute(id).subscribe(route => this.route = route);
  }

}
