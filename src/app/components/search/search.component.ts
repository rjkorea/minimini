import { Component, OnInit, HostListener } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [ SearchService ]
})

export class SearchComponent implements OnInit{
  private show: boolean = false;
  private searchData: any[];
  private curPage: number = 0;
  private pageSize: number = 5;
  private total: number = 0;
  private prev: string;
  private next: string;
  private items: any[];
  private counter: number = 0;
  private length: number = 0;
  private inputWord: string = '';
  private loader: boolean = true;
  private that = this;
  private userAgentCheck: boolean = false;

  constructor(
    private searchService: SearchService
  ) {}

  ngOnInit() {
    let userAgent = navigator.userAgent;
    if(userAgent.toLowerCase().indexOf('mobile') < 0) {
      this.userAgentCheck = true;
      console.log('desktop');
    } else {console.log(userAgent)
      this.userAgentCheck = false;
      console.log('mobile');
    }
  }

  public onScroll($event: Event): void {
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

  public insertData(data: any): void {
    let artist = data.artists;
    this.searchData = artist.items;
    this.show = true;
    this.total = artist.total;
    this.prev = artist.previous;
    this.next = artist.next;
    this.curPage = artist.offset;
    this.items = artist.items.slice(0, 5);
    this.counter = 5;
  }

  public search(word: string): void {
    this.inputWord = word;
    this.searchService.getSearchData(word)
      .then(data => this.insertData(data));
  }

  public nextPageClick(url: string): void {
    window.scrollTo(0, 0);
    this.searchService.getNextData(url)
      .then(data => this.insertData(data));
  }

  public nextPageMore(offset: number): void {
    window.scrollTo(0, 0);
    this.searchService.getNextMore(offset)
      .then(data => this.insertData(data));
  }

  public prevPageClick(url: string): void {
    window.scrollTo(0, 0);
    this.searchService.getPrevData(url)
      .then(data => this.insertData(data));
  }

  public prevPageMore(offset: number): void {
    window.scrollTo(0, 0);
    this.searchService.getPrevMore(offset)
      .then(data => this.insertData(data));
  }
}
