import { Injectable } from '@angular/core';
import { Detail } from './detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  formData: Detail;
  readonly rootURL = 'http://localhost:60335/api';
  list: Detail[];
  constructor(private http: HttpClient) {}

  postDetail() {
    return this.http.post(this.rootURL + '/Details', this.formData);
  }
  updateDetail() {
    return this.http.put(
      this.rootURL + '/Details/' + this.formData.Id,
      this.formData
    );
  }
  deleteDetail(id) {
    return this.http.delete(this.rootURL + '/Details/' + id);
  }

  refreshList() {
    this.http
      .get(this.rootURL + '/Details')
      .toPromise()
      .then((res) => (this.list = res as Detail[]));
  }

  getUser() {
    return this.http.get<Detail[]>(this.rootURL + '/Details');
  }
}
