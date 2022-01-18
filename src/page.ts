export class Page {
   pageSize:number;
   pageType:string;
   pageMaterial: string;
   

   constructor(pageSize:number, pageType:string, pageMaterial:string){
     this.pageSize = pageSize;
     this.pageType = pageType;
     this.pageMaterial = pageMaterial;
   }

   toString ():string {
     return `here is page ${this.pageType} #${this.pageSize} and it\'s material is ${this.pageMaterial}`
   }


}
