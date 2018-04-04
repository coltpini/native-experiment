import buildShadowRoot from '../buildShadowRoot.js';

class FlyTile extends HTMLElement {
    constructor() {
        super();
        const html = `
        <style>
            :host {
                --text-color: var(--color-100, #333);
                --overlay-color: var(--dark-trans, rgba(255,255,255,0.8));
                display: block;
                cursor: pointer;
                overflow: hidden;
            }

            :host([overlay]) figcaption{
                position: absolute;
                bottom: 0;
                width: 100%;
                left: 50%;
                transform: translate(-50%);
                background: var(--overlay-color);
                margin: 0;
                padding: var(--space-100);
                --text-color: var(--color-200, white);
            }
            
            a {
                text-decoration: none;
            }
            
            figure {
                position: relative;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
            }
            img {
                width: 100%;
            }
            figcaption {
                color: var(--text-color);
                margin: var(--space-100) 0 var(--space-200);
                text-align: center;
                font-size: 0.8em;
            }
        </style>
        <a>   
            <figure>
                <img />
                <figcaption>
                    <slot></slot>
                </figcaption>
            </figure>
        </a>
        `;
        buildShadowRoot(html,this);

        this.elems = {
            img: this.shadowRoot.querySelector('img'),
            link: this.shadowRoot.querySelector('a')
        }
    }

    static get observedAttributes() {
        return [`img`,`href`];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if(attrName === `img`){
            this.elems.img.setAttribute(`src`, newVal);
            this.elems.img.setAttribute(`alt`, this.textContent)
        }
        if(attrName === `href`){
            this.elems.link.setAttribute(`href`,newVal);
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
    get href(){
        return this.getAttribute(`href`);
    }
    set href(val){
        if (val) {
            this.setAttribute(`href`, val);
        } else {
            this.removeAttribute(`href`);
        }
    }

    get overlay(){
        return this.hasAttribute(`overlay`);
    }
    set overlay(val){
        if (val) {
            this.setAttribute(`overlay`, '');
        } else {
            this.removeAttribute(`overlay`);
        }
    }
    
}

customElements.define(`fly-tile`, FlyTile);
export default FlyTile;
