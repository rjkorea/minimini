import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [SearchService]
})

export class SearchComponent implements OnInit{
  show: boolean = false;
  searchData;
  curPage: number = 0;
  pageSize: number = 5;
  total: number = 0;
  prev;
  next;
  constructor(
    private searchService: SearchService
  ){}

  ngOnInit() {}

  insertData(data) {
    this.searchData = data;
    this.show = true;
    this.total = data.artists.total;
    this.prev = data.artists.previous;
    this.next = data.artists.next;
    this.curPage = data.artists.offset;
  }

  search(word) {
    this.searchService.getSearchData(word)
      .then(data => this.insertData(data));
  }

  nextPageClick(url) {
    this.searchService.getNextData(url)
      .then(data => this.insertData(data));
  }

  prevPageClick(url) {
    this.searchService.getPrevData(url)
      .then(data => this.insertData(data));
  }
}
