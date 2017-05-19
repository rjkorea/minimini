import { Component, OnInit, HostListener } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [ SearchService ]
})

export class SearchComponent implements OnInit{
  show: boolean = false;
  searchData;
  curPage: number = 0;
  pageSize: number = 5;
  total: number = 0;
  prev;
  prevMore;
  next;
  nextMore;
  items: any;
  counter: number = 0;
  length: number = 0;
  inputWord: string = '';
  loader: boolean = true;
  that = this;

  constructor(
    private searchService: SearchService
  ){}

  ngOnInit() {}

  onScroll($event: Event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      let that = this;
      if(this.counter < this.searchData.length) {
        this.loader = true;
        setTimeout(() => {
          let getData = that.searchData.slice(that.counter, that.counter + 5);
          for(let i = 0; i < getData.length; i++){
            that.items.push(getData[i]);
          }
          that.counter += 5;
          that.loader = false;
        }, 1000);
      } 
    }
  }

  insertData(data) {
    let artist = data.artists;
    this.searchData = artist.items;
    this.show = true;
    this.total = artist.total;
    this.prev = artist.previous;
    this.next = artist.next;
    this.curPage = artist.offset;
    this.items = artist.items.slice(0, 5);
    this.counter = 5;
    console.log(this.next)
  }

  search(word) {
    this.inputWord = word;
    this.searchService.getSearchData(word)
      .then(data => this.insertData(data));
  }

  nextPageClick(url) {
    window.scrollTo(0, 0);
    this.searchService.getNextData(url)
      .then(data => this.insertData(data));
  }

  nextPageMore(offset) {
    window.scrollTo(0, 0);
    this.searchService.getNextMore(offset)
      .then(data => this.insertData(data));
  }

  prevPageClick(url) {
    window.scrollTo(0, 0);
    this.searchService.getPrevData(url)
      .then(data => this.insertData(data));
  }

  prevPageMore(offset) {
    window.scrollTo(0, 0);
    this.searchService.getPrevMore(offset)
      .then(data => this.insertData(data));
  }
}
