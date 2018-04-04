import buildShadowRoot from '../buildShadowRoot.js';
import FlyTag from '../fly-tag/fly-tag.js';
import MediaBlock from '../media-block/media-block.js';

class FlyDetail extends HTMLElement {
    constructor() {
        super();
        const html = `
        <style>
            :host {
               
            }

            media-block {
                margin: var(--spacing-300);
            }

            dl {
                margin-bottom: var(--space-200);
            }

            dt {
                font-size: 0.8em;
                margin-bottom: var(--space-75);
                font-weight: 700;
            }
            dd {
                margin-left: var(--space-100);
            }

            dd ul, dd ol {
                margin: 0;
                padding: 0;
                list-style-type: '-';
            }
            dd li {
                margin: 0;
                margin-left: var(--space-100);
            }

            dd *:first-child {
                margin-top: 0;
            }

            dd *:last-child {
                margin-bottom: 0;
            }

        </style>
        <section>
            <h2>
                <span class="name"></span> 
                <em>- #<span class="size"></span></em>
            </h2>
            <media-block></media-block>
            <dl>
               <dt>Description</dt> 
               <dd class="description"> </dd>
            </dl>
            <dl>
                <dt>Material</dt>
                <dd class="material"></dd>
            </dl>
            <div class="tags"></div>
        </section>
        `;
        buildShadowRoot(html,this);

        this.elems = {
            media: this.shadowRoot.querySelector('media-block'),
            name: this.shadowRoot.querySelector(`.name`),
            size: this.shadowRoot.querySelector(`.size`),
            description: this.shadowRoot.querySelector('.description'),
            material: this.shadowRoot.querySelector('.material'),
            tags: this.shadowRoot.querySelector('.tags')
        }
    }

    static get observedAttributes() {
        return [`img`, `name`, `size`, `note`, `description`, `material`, `tags`];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch(attrName){
            case `img`:
                this.elems.media.img = newVal;
                break;
            case `note`:
                this.elems.media.caption = newVal;
                break;
            case `name`:
                this.elems.name.innerHTML = newVal;
                this.elems.media.title = newVal;
                break;
            case `size`:
                this.elems.size.innerHTML = newVal;
                break;
            case `description`:
                this.elems.description.innerHTML = newVal;
                break;
            case `material`:
                this.elems.material.innerHTML = newVal; 
                break;
            case `tags`:
                if(newVal && newVal !== ''){
                    this.elems.tags.innerHTML = newVal.split(',').map( tag => `<fly-tag>${tag}</fly-tag>`).join('')
                }
                else {
                    this.elems.tags.innerHTML = newVal;
                }
                break;
            default:
                break;
        }
        if(attrName === `img`){
            
        }
    }

    get img(){
        return this.getAttribute(`img`);
    }
    set img(val){
        if (val) {
            this.setAttribute(`img`, val);
        } else {
            this.removeAttribute(`img`);
        }
    }
    get name(){
        return this.getAttribute(`name`);
    }
    set name(val){
        if (val) {
            this.setAttribute(`name`, val);
        } else {
            this.removeAttribute(`name`);
        }
    }
    get size(){
        return this.getAttribute(`size`);
    }
    set size(val){
        if (val) {
            this.setAttribute(`size`, val);
        } else {
            this.removeAttribute(`size`);
        }
    }
    get note(){
        return this.getAttribute(`note`);
    }
    set note(val){
        if (val) {
            this.setAttribute(`note`, val);
        } else {
            this.removeAttribute(`note`);
        }
    }
    get description(){
        return this.getAttribute(`description`);
    }
    set description(val){
        if (val) {
            this.setAttribute(`description`, val);
        } else {
            this.removeAttribute(`description`);
        }
    }
    get material(){
        return this.getAttribute(`material`);
    }
    set material(val){
        if (val) {
            this.setAttribute(`material`, val);
        } else {
            this.removeAttribute(`material`);
        }
    }
    get tags(){
        return this.getAttribute(`tags`);
    }
    set tags(val){
        if (val) {
            this.setAttribute(`tags`, val);
        } else {
            this.removeAttribute(`tags`);
        }
    }
}

customElements.define(`fly-detail`, FlyDetail);
export default FlyDetail;
