import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CloudstarxService} from '../cloudstarx.service';

import {Place} from '../place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cloudstarxService: CloudstarxService
  ) { }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.cloudstarxService.getPlace(id).subscribe(place => this.place = place);
  }

}
