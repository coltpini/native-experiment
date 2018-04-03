import buildShadowRoot from '../buildShadowRoot.js';
import TileGrid from '../tile-grid/tile-grid.js';
import FlyTile from '../fly-tile/fly-tile.js';
class FilterList extends HTMLElement {
    constructor() {
        super();
        const html = `
            <style>
                :host {
                    --active-color: var(--color-200, #eee);
                }
                .container {
                    display: grid;
                    grid-gap: var(--space-100);
                    grid-template-columns: var(--space-400) 1fr;
                }
                nav {
                    display: flex;
                    flex-direction: column;
                }
                nav span {
                    cursor: pointer;
                    padding: var(--space-100);
                }
                nav > [active] {
                    background: var(--active-color);
                }
                tile-grid fly-tile {
                    display: block;
                }
                tile-grid fly-tile.hide{
                    display: none;
                }
            </style>
            <div class="container">
                <nav></nav>
                <tile-grid gap>
                </tile-grid>
            </div>
        `;
        buildShadowRoot(html,this);
        this.elems = {
            nav: this.shadowRoot.querySelector(`nav`),
            grid: this.shadowRoot.querySelector('tile-grid')
        }

        this.elems.nav.addEventListener('click', this.handleClick.bind(this));
        this.observer = this.watchChildren();
        this.updateChildren();
    }

    watchChildren(){
        let observer = new MutationObserver((mutations) => {
        	mutations.forEach((mutation) => {
        		this.updateChildren();
        	});
        });

        observer.observe(this, {childList: true});
        return observer;
    }

    updateChildren(){
        this.observer.disconnect();

        this.elems.grid.innerHTML = '';

        [...this.children].forEach(child => {
            let elem = child.cloneNode(true);
            this.elems.grid.appendChild(elem);
        });
        this.observer.observe(this, {childList: true});
        this.filterList();
    }

    handleClick({target}) {
        if(target !== this.elems.nav){
            this.active = target.textContent === 'All' ? '' : target.textContent;
        }
    }

    filterList(){
        if(this.active === 'All' || !this.active){
            [...this.elems.grid.querySelectorAll(`fly-tile.hide`)].forEach( tile => {
                tile.classList.remove('hide')
            });
        } 
        else {
            [...this.elems.grid.querySelectorAll('fly-tile.hide')].forEach( tile => {
                tile.classList.remove('hide');
            });
            [...this.elems.grid.querySelectorAll(`fly-tile:not([data-tags*="${this.active}"])`)].forEach( tile => {
                tile.classList.add('hide');
            });
        }

    }

    static get observedAttributes() {
        return [`tags`, `active`];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if(attrName === `tags`){
            this.taglist = newVal.split(`,`).map(item => item.trim());
        }
        this.elems.nav.innerHTML = this.taglist.reduce( (a, n) => `${a}<span ${n === this.active ? 'active' : ''}>${n}</span>`, `<span ${this.active === '' || !this.hasAttribute('active') ? 'active' : ''}>All</span>`)
        this.filterList();
    }

    get active(){
        return this.getAttribute(`active`);
    }
    set active(val){
        if (val) {
            this.setAttribute(`active`, val);
        } else {
            this.removeAttribute(`active`);
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

customElements.define(`filter-list`, FilterList);
export default FilterList;