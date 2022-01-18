import { Page } from "./page";
import { PageIterable } from "./pageIterable";
import { Pages } from "./pages";

export class Magazine extends PageIterable {
 private title:string;

 constructor(title:string,  pages:Pages){
    super(pages)
     this.title = title;
     this.pages = pages;
 }

 public getTitle ():string{
   return this.title;
 }

 public setTitle (title:string){
   this.title = title;
 }

toString ():string {
 return  `Magazine: ${this.title} with number of pages: ${this.pages.pages.length}, ${this.pages.pages[this.index]}`
}

}
