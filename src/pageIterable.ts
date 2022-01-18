import { Pages } from "./pages";


export abstract class PageIterable {
   pages: Pages;
   protected index:number = 0;

   constructor(pages:Pages){
     this.pages = pages;
   }

   *[Symbol.iterator]() {
    for (const page of this.pages.pages) {
        yield this;
        this.index ++;
    }

  }

}



