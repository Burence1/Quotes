export class Quote {
  constructor(
    public name: string, public text:string,
    public author:string ,public likes: number,
    public dislikes: number,public newDate: Date){
  }
}
