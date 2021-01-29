import { Component, OnInit } from '@angular/core';

import { DetailService } from '../shared/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(public service: DetailService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }
}
