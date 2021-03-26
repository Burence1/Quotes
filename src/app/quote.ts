export class Quote {
  constructor(public id: number, public name: string, public text:string, public author:string ,public likes: number, public dislikes: number){
    this.id = id;
    this.name = name;
    this.text = text;
    this.author = author;
  }
}
