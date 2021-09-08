import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo?: string;
  public tituloSubs$: Subscription;
  constructor(private router: Router) {
    this.tituloSubs$ =  this.getBreadcrumbs()
    .subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${ titulo }`
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getBreadcrumbs(){
    return this.router.events
    .pipe(
      filter(
        (event): event is ActivationEnd => event instanceof ActivationEnd
      ),
      filter(
        (event: ActivationEnd) =>
          (event as ActivationEnd).snapshot.firstChild === null
      ),
      map((event: any) => (event as ActivationEnd).snapshot.data)
    );
  }
}
