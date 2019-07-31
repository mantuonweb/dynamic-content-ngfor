import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dcontent',
  templateUrl: './dcontent.component.html',
  styleUrls: ['./dcontent.component.css']
})
export class DcontentComponent implements OnInit {
  @Input() list
  @Input() template
  constructor() { }

  ngOnInit() {
  }

}