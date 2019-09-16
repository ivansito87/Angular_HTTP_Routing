import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})

export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  // If you are sure that the user will navigate away from you application
    // and then come back we need to use the method snapshot only when the user will
    // be going away from the page and come back later
    let id = this.route.snapshot.paramMap.get("id");
    console.log("id", id);


    // observables is a collection of asynchronous data that arrives at a certain time``
    // Observable which means that it contains a subscribe
    // observables are used to re render the same component
   /*
   *
   *
   * this.route.paramMap
   *   .subscribe(params => {
   *     // :TODO the add + sign in front of a variable will turn it into a number;
   *     let id = +params.get("id");
   *     console.log("id", id);
   *
   *
   * });*/

  }

}

