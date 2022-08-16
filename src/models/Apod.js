export class Apod {
    constructor(data){
        this.title = data.title,
        this.img = data.hdurl,
        this.date = data.date,
        this.description = data.explanation,
        this.copyright = data.copyright
    }
}