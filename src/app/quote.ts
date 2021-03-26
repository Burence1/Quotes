export class Quote {
  constructor(public id: number, public name: string, public text:string, public author:string){
    this.id = id;
    this.name = name;
    this.text = text;
    this.author = author;
  }
}
