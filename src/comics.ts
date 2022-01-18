import { PageIterable } from "./pageIterable";
import { Pages } from "./pages";

export class Comics extends PageIterable{
  
 private title:string;
 private author:string;
 private artist:string;

 constructor(title:string, author:string, artist:string, pages:Pages){
    super(pages)
     this.title = title;
     this.author = author;
     this.artist = artist;

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

 public getArtist ():string {
   return this.artist;
 }

 public setArtist(artist: string){
   this.artist = artist;

 }

toString ():string {
 return  `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.pages.length}, ${this.pages.pages[this.index]}`
}
}
