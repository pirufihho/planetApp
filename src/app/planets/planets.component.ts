import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private planetService: PlanetService) { }

  planetsList: any[];
  error: any;

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.planetService.getPlanets()
      .subscribe(
        (data: any) => this.planetsList = { ...data.results }, // success path
        error => this.error = error // error path
      );
  }

}
