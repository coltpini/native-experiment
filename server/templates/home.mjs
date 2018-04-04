import BaseTemplate from './base.mjs';

export default class Home extends BaseTemplate {
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
    getFlyTags(flies){
        let tags = flies.reduce( (a, n) => [...a, ...n.tags], []);
        tags = tags.filter( (tag, i, arr) => arr.indexOf(tag) === i);
        return tags.join(',')
    }
    populatePage(content){
        return content.map( block => {
            if(block.type === `filter-list`){
                return `
                    <filter-list tags="${this.getFlyTags(block.flies)}">
                        ${
                            block.flies.map( fly => `<fly-tile href="#" img="/static/assets/img/thumb/${fly.id}.jpg" ${fly.tags.length > 0 ? `data-tags="${fly.tags.join(',')}"` : ''}>${fly.name}</fly-tile>`).join('')
                        }
                    </filter-list>
                `;
            }
        }).join('');
    }
}
