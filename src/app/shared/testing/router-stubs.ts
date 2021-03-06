/* tslint:disable */
import {
  Component,
  Directive,
  HostListener,
  Injectable,
  Input,
  NgModule
} from '@angular/core'
import { NavigationExtras } from '@angular/router'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any
  navigatedTo: any = null

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams
  }
}

@Component({
  selector: 'router-outlet',
  template: `<p>router-stub</p>`
})
export class RouterOutletStubComponent {}

@Injectable()
export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {}
}

@Injectable()
export class ActivatedRouteStub {
  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams)
  params = this.subject.asObservable()

  // Test parameters
  private _testParams: {}
  get testParams() {
    return this._testParams
  }

  set testParams(params: {}) {
    this._testParams = params
    this.subject.next(params)
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams }
  }
}

@NgModule({
  providers: [ActivatedRouteStub, RouterStub],
  declarations: [RouterLinkStubDirective, RouterOutletStubComponent]
})
export class RouterStubModule {}

/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
