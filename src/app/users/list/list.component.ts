import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListUsersComponent implements OnInit {

  collection = {count: 60, data:[]}
  config = {
    itemsPerPage:10,
    currentPage:1,
    totalItems: this.collection.count
  };
  public maxSize:number = 7;
  public directionLinks: boolean = true;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Próxima'};

  constructor() { }

  ngOnInit(): void {
    this.populateElements();
  }

  populateElements(){
    for(let i=0; i < this.collection.count; i++) {
      this.collection.data.push ({
        username: 'teste' + i,
        name: 'nome' + i,
        admin: 'sim'
      })
    }
  }

  onPageChange(event) {
    this.config.currentPage = event;
  }
}
