import BaseTemplate from './base.mjs';

export default class Fly extends BaseTemplate {
    constructor(data){
        super();
        this.createParts(data);
    }
    createParts({navigation, content, title, description, socialImage}){
        this.head.title = title;
        this.head.content = `
            <meta property="og:title" content="${title}">
            <meta property="og:description" content="${description}">
            <meta property="og:image" content="${socialImage}">
        `;
        this.header = this.populateHeader({navigation});
        this.page = this.populatePage(content);
    }
    populatePage(fly){
        return `
            <fly-detail 
                name="${fly.name}" 
                size="${fly.size}" 
                note="${fly.note}"
                tags="${fly.tags.join(',')}"
                material="${fly.material}"
                description="${fly.description}"
                img="/static/assets/img/${fly.id}.jpg"
            ></fly-detail>
        `;
    }
}
