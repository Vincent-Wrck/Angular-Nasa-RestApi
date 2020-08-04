export class SpacePicture {
    copyright: string ;
    date: Date;
    imageURL: string;
    title: string;
    version: string;
    explanation: string;

    
        constructor (
            ntm: string,
            date: Date,
            imageURL: string,
            title: string,
            version: string,
            explanation: string,
            
        ) {
            this.copyright = ntm;
            this.date = date;
            this.imageURL = imageURL;
            this.title = title;
            this.version = version;
            this.explanation = explanation;

        }
        
}
