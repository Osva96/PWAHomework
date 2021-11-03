import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, retry } from 'rxjs/operators';

// import { MasterDisc } from 'src/app/models/masterdisc.model';


@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  constructor(
    private httpClient: HttpClient
  ) { }

  GetAllItems() {
    const url = `${environment.URL}search?isOnView=true&q=insect`;

    return this.httpClient.get(url);
  }

  GetItemId(id: any) {
    const url = `${environment.URL}objects/${id}`;

    return this.httpClient.get(url);
  }

}
