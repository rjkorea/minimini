import { Component, OnInit, HostListener } from '@angular/core';
import { SearchService } from '../../services/search.service';
// import { whenScrolledDirective } from './search.directive';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  // directives: [ whenScrolledDirective ],
  providers: [ SearchService ]
})

export class SearchComponent implements OnInit{
  show: boolean = false;
  searchData;
  curPage: number = 0;
  pageSize: number = 5;
  total: number = 0;
  prev;
  next;
  items: any = [];

  constructor(
    private searchService: SearchService
  ){}

  @HostListener('scroll', ['$event']) private onScroll($event:Event):void {
    console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
  }

  ngOnInit() {}

  // loadMore() {
  //   let count = 0;
  //   let length = this.searchData.artists.items.slice(count, count + 5);
  //   for(let i = 0; i < length; i++){
  //     this.items.push(this.searchData.artists.items[i]);
  //   }
  //   count += 5;
  // }

  insertData(data) {
    this.searchData = data;
    this.show = true;
    this.total = data.artists.total;
    this.prev = data.artists.previous;
    this.next = data.artists.next;
    this.curPage = data.artists.offset;
    // this.loadMore();
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
