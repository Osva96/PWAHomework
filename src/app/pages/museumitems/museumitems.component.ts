import { Component, OnInit, OnDestroy, VERSION } from '@angular/core';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SwUpdate } from '@angular/service-worker';

import { MuseumService } from 'src/app/services/museum/museum.service';
import { Router, Route } from '@angular/router';
// Import uniqueobject.model

@Component({
  selector: 'app-museumitems',
  templateUrl: './museumitems.component.html',
  styleUrls: ['./museumitems.component.scss']
})
export class MuseumitemsComponent implements OnInit, OnDestroy {

  /* Network status */
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;

  /* Items List General */
  allItemsListGeneral: any[] = [];

  constructor(
    public museumService: MuseumService,
    public router: Router,
    public updates: SwUpdate
  ) {
    /* Verify PW updates available */
    updates.available.subscribe(event => {
      console.log('Current version is: ', event.current);
      console.log('Available version is: ', event.available);
    });

    /* Verify PW updates activaited */
    updates.activated.subscribe(event => {
      console.log("Old version was: ", event.previous);
      console.log('New version is; ', event.current);
    });

    /* Activate a PW update */
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => this.updateApp());
    });
  }

  ngOnInit(): void {
    /* Check the network status (online or offline) */
    this.checkNetworkStatus();

    /* Get all items of the API museum */
    this.museumService.GetAllItems().subscribe((almacenaje) => {
      // this.allItemsListGeneral.push({...almacenaje});
      let simplificar = JSON.stringify(almacenaje);
      let obtenerListaSimple = JSON.parse(simplificar);
      let listaOficial = obtenerListaSimple.objectIDs;

      // console.log(listaOficial);

      listaOficial.forEach(element => {
        this.museumService.GetItemId(element).subscribe((item) => {
          this.allItemsListGeneral.push(item);
        }, (error) => {
          console.log("Error obteniendo el item: ", error);
        });
      });

      // console.log("Lista de items", this.allItemsListGeneral);

    }, (err) => {
      console.log("Error in: ", err);
    });
  }

  ngOnDestroy(): void {
    /* Unsubscribe the status when the network is offline. */
    this.networkStatus$.unsubscribe();
  }

  /**
   * Open other page where the specific item selected by the
   * user is now presented in the next page. This method navigate
   * to the other page with the ID param of the item to show.
   */
  GoToSpecificItem(id: number) {
    // console.log(id);
    this.router.navigate(['/item', id]);
    // this.router.navigateByUrl('/item/');
  }

  /**
   * Permit the view of the status of the networ,
   * if is online or offline.
   */
  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    ).pipe(
      map(() => navigator.onLine)
    ).subscribe(
      status => {
        console.log('Status connection: ', status);
        this.networkStatus = status;
      }
    );
  }

  /**
   * Make an update of the page if the PWA detects a new
   * update.
   */
  updateApp() {
    document.location.reload();
    console.log('The app is updating right now.');
  }

}
