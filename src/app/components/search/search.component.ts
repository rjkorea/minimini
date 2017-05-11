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
  constructor(
    private searchService: SearchService
  ){}

  ngOnInit() {
  }

  search(word) {
    this.searchService.getSearchData(word)
      .then(data => {
        this.searchData = data;
        this.show = true;
      })
  }
}
