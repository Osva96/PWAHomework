import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MuseumService } from 'src/app/services/museum/museum.service';

@Component({
  selector: 'app-uniqueitem',
  templateUrl: './uniqueitem.component.html',
  styleUrls: ['./uniqueitem.component.scss']
})
export class UniqueitemComponent implements OnInit {

  idItem: any = 0;
  itemInformation: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private museumService: MuseumService
  ) { }

  ngOnInit(): void {
    let catchId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(catchId);

    this.museumService.GetItemId(catchId).subscribe(data => {
      this.itemInformation.push({...data});
      console.log("Item only: ", this.itemInformation);
    });
  }

}
