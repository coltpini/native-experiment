import buildShadowRoot from '../buildShadowRoot.js';

class TileGrid extends HTMLElement {
    constructor() {
        super();
        const html = `
        <style>
        :host {
           --grid-columns: 2;
           --gap: var(--space-50, 0.8em);
        }
        
        :host([gap]) section{
            grid-gap: var(--gap);
        }
        
        :host([size="small"]){
            --grid-columns: 2;
        }

        :host([size="large"]){
            --grid-columns: 1;
        }
        section {
            display: grid;
            grid-template-columns: repeat(var(--grid-columns), 1fr);
        }

        @media screen and (min-width: 32em) {
            :host([size="small"]){
                --grid-columns: 3;
            }
        }
        
        @media screen and (min-width: 76em) {
            :host {
                --grid-columns: 3;
            }
            :host([size="small"]){
                --grid-columns: 4;
            }
    
            :host([size="large"]){
                --grid-columns: 2;
            }
        }
        
        @media screen and (min-width: 112em) {
            :host {
                --grid-columns: 4;
            }
            :host([size="small"]){
                --grid-columns: 5;
            }
    
            :host([size="large"]){
                --grid-columns: 3;
            }
        }

        </style>
        <section>
            <slot></slot>
        </section>
        `;
        buildShadowRoot(html,this);
    }

    get size(){
        return this.hasAttribute(`size`);
    }
    set size(val){
        if (val) {
            this.setAttribute(`size`, '');
        } else {
            this.removeAttribute(`size`);
        }
    }

    get gap(){
        return this.hasAttribute(`gap`);
    }
    set gap(val){
        if (val) {
            this.setAttribute(`gap`, '');
        } else {
            this.removeAttribute(`gap`);
        }
    }

}

customElements.define(`tile-grid`, TileGrid);
export default TileGrid;
