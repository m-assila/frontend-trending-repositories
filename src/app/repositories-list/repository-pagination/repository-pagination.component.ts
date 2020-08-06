import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repository-pagination',
  templateUrl: './repository-pagination.component.html',
  styleUrls: ['./repository-pagination.component.css']
})
export class RepositoryPaginationComponent implements OnInit {
  @Output() changePage = new EventEmitter<number>();
  @Input() presentPage: number;
  constructor() { }

  ngOnInit() {
  }
  onChange(page: number) {
    this.changePage.emit(page);
  }

}
