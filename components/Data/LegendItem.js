

export class LegendItem{
    constructor(title, colour, textColour){
        this.title = title,
        this.colour = colour,
        this.colour = textColour != null ? textColour : "black";
    }
}