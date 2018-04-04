import buildShadowRoot from '../buildShadowRoot.js';
import FlyTag from '../fly-detail/fly-detail.js';

class FlyDetail extends HTMLElement {
    constructor() {
        super();
        const html = `
        <style>
            :host {
               
            }
        </style>
        <section>
            <h2>
                <span class="name"></span> 
                <em>- #<span class="size"></span></em>
            </h2>
            <figure>
                <img />
                <figcaption>
                    <p class="note"></p>
                </figcaption>
            </figure>
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
            img: this.shadowRoot.querySelector('img'),
            name: this.shadowRoot.querySelector(`.name`),
            size: this.shadowRoot.querySelector(`.size`),
            note: this.shadowRoot.querySelector(`.note`),
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
                this.elems.img.setAttribute(`src`, newVal);
                this.elems.img.setAttribute(`alt`, this.fly)
                break;
            case `name`:
                this.elems.name.innerHTML = newVal;
                break;
            case `size`:
                this.elems.size.innerHTML = newVal;
                break;
            case `note`:
                this.elems.note.innerHTML = newVal;
                break;
            case `description`:
                this.elems.description.innerHTML = newVal;
                break;
            case `material`:
                this.elems.material.innerHTML = newVal; 
                break;
            case `tags`:
                this.elems.tags.innerHTML = newVal.split(',').map( tag => `<fly-tag>${tag}</fly-tag>`).join('')
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
}

customElements.define(`fly-detail`, FlyDetail);
export default FlyDetail;
