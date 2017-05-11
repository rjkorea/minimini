import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [SearchService]
})

export class SearchComponent implements OnInit{
  show = false;
  searchData;
  curPage = 0;
  pageSize = 5;
  total = 0;
  totalPage = 0;
  prev;
  next;
  constructor(
    private searchService: SearchService
  ){}

  ngOnInit() {}

  search(word) {
    this.searchService.getSearchData(word)
      .then(data => {
        this.searchData = data;
        this.show = true;
        this.total = data.artists.total;
        this.totalPage = Math.ceil(this.total / 20);
        this.prev = data.artists.previous;
        this.next = data.artists.next;
        this.curPage = data.artists.offset;
      });
  }

  nextPageClick(url) {
    this.searchService.getNextData(url)
      .then(data => {
        this.searchData = data;
        this.show = true;
        this.total = data.artists.total;
        this.totalPage = Math.ceil(this.total / 20);
        this.prev = data.artists.previous;
        this.next = data.artists.next;
        this.curPage = data.artists.offset;
      });
  }

  prevPageClick(url) {
    this.searchService.getPrevData(url)
      .then(data => {
        this.searchData = data;
        this.show = true;
        this.total = data.artists.total;
        this.totalPage = Math.ceil(this.total / 20);
        this.prev = data.artists.previous;
        this.next = data.artists.next;
        this.curPage = data.artists.offset;
      });
  }
}
