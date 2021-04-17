import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanetService } from '../planet.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private planetService: PlanetService) { }

  planetsList: any[];
  error: any;
  displayedColumns: string[] = ['name', 'diameter', 'climate', 'gravity', 'population', 'created'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.planetService.getPlanets()
      .subscribe(
        (data: any) => {
          this.planetsList = data.results;
          this.dataSource = new MatTableDataSource(this.planetsList);
          this.dataSource.sort = this.sort;
        }, // success path
        error => this.error = error // error path
      );
  }

}
