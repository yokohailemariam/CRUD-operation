import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Detail } from 'src/app/shared/detail.model';
import { DetailService } from 'src/app/shared/detail.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css'],
})
export class DetailListComponent implements OnInit {
  p: number = 1;
  FirstName: any;
  Detail: DetailService['list'] = [];
  constructor(public service: DetailService, public toastr: ToastrService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd: Detail) {
    this.service.formData = pd;
  }

  onDelete(Id) {
    if (confirm('You wanna delete ?')) {
      this.service.deleteDetail(Id).subscribe(
        (res) => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  search() {}
}
