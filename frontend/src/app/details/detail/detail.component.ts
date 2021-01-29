import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Detail } from 'src/app/shared/detail.model';
import { DetailService } from 'src/app/shared/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  FirstName: any;
  Data: Detail[] = [];
  constructor(public service: DetailService, public toastr: ToastrService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      Id: 0,
      FirstName: '',
      Secondname: '',
      PhoneNumber: '',
      Region: '',
      Date: '',
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id === 0) {
      this.inserFrom(form);
    } else {
      this.updateForm(form);
    }
  }

  inserFrom(form: NgForm) {
    this.service.postDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.toastr.success('Submitted Successfuly');
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateForm(form: NgForm) {
    this.service.updateDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.toastr.info('Updated Successufly');
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
