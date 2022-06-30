import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  liraImages: String[] = [
    "../assets/LIRA_L.png",
    "../assets/LIRA_C.png",
    "../assets/LIRA_R.png"
  ];
  liraText: String[] = [
    "route map",
    "mint",
    "lor"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
