import { PageIterable } from "./pageIterable";
import { Pages } from "./pages";

export class Book extends PageIterable {
 private title:string;
 private author:string;

 constructor(title:string, author:string, pages:Pages){
    super(pages);
     this.title = title;
     this.author = author;
 }

 public getTitle ():string{
   return this.title;
 }

 public setTitle (title:string){
   this.title = title;
 }

 public getAuthor ():string {
   return this.author;
 }

 public setAuthor (author:string){
   this.author = author;
 }

toString ():string {
 return  `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.pages.length}, ${this.pages.pages[this.index]}`
}

}
