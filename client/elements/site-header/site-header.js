import buildShadowRoot from '../buildShadowRoot.js';
class SiteHeader extends HTMLElement {
    constructor() {
        super();
        const html = `
        <style>
                :host {
                    --active: var(--highlight);
                    --align-items: center;
                    --header-bg: var(--white, white);
                    --header-bg-trans: var(--white-trans, RGBA(255, 255, 255, 0.7));
                    --justify-content: center;
                    --brand-color: var(--color-300, RGBA(58, 58, 58, 1.00));
                    --seperator-color: var(--color-200, RGBA(234, 234, 234, 1.00));
                    display: block;
                    margin-bottom: var(--space-200);
                }

                * {
                    box-sizing: border-box;
                }
                
                section {
                    background: var(--header-bg);
                    width: 100%;
                }

                h1 {
                    margin: 0;
                    padding: 0;
                }
                
                h1 a {
                    align-items: center;
                    display: flex;
                    font-size: 1.1em;
                    font-weight: 100;
                    color: var(--brand-color);
                    text-decoration: none;
                }
                
                h1 a img {
                    width: 100%;
                    max-width: 130px;
                    display: none;
                    margin-right: var(--space-50);
                }
                
                h1 a img.active {
                    display: inline-block;
                }
                
                .nav-container {
                    align-items: var(--align-items);
                    border-bottom: 1px solid var(--seperator-color);
                    display: flex;
                    justify-content: var(--justify-content);
                    margin: 0 auto;
                    padding: var(--space-100) var(--space-200);
                    width: 80%;
                }
                
                :host([pinned]) section{
                    position: fixed;
                }
                
                :host([overlay]) section{
                    position: absolute;
                }
                
                :host([overlay]) section, :host([pinned]) section {
                    left: 50%;
                    transform: translateX(-50%);
                    top: 0;
                    background: var(--header-bg-trans);
                }

                :host([overlay]) .nav-container, :host([pinned]) .nav-container {
                    width: 100%;
                }

                :host([layout="split"]) {
                    --align-items: center;
                    --justify-content: space-between;
                }

                :host([layout="left"]) {
                    --align-items: center;
                    --justify-content: left;
                }

                :host([layout="left"]) h1 {
                    margin-right: var(--space-200);
                }

                ::slotted(nav-item) {
                    margin-right: var(--space-75);
                    font-size: 0.9em;
                }
        </style>
        <section>
            <div class="nav-container">
                <h1>
                    <a href="/" class="title-link" >
                        <img />
                        <span class="title"></span>
                    </a>
                </h1>
                <nav>
                    <slot></slot>
                </nav>
            </div>
        </section>
        `;
        buildShadowRoot(html, this);
        this.elems = {
            logo: this.shadowRoot.querySelector('img'),
            container: this.shadowRoot.querySelector('.nav-container'),
            title: this.shadowRoot.querySelector('.title'),
            titleLink: this.shadowRoot.querySelector('.title-link')
        }
    }

    static get observedAttributes() {
        return [`logo`, `title`, `link`];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case `logo`:
                this.elems.logo.classList.toggle('active', newVal);
                this.elems.logo.src = newVal;
                break;
            case `title`:
                this.elems.title.textContent = newVal;
                break;
            case `link`:
                this.elems.titleLink.href = newVal;
                break;
            default:
                break;
        }
    }

    get logo() {
        return this.getAttribute('logo');
    }
    set logo(val) {
        if (val) {
            this.setAttribute('logo', val);
        }
        else {
            this.removeAttribute('logo');
        }
    }
    get layout() {
        return this.getAttribute('layout');
    }
    set layout(val) {
        if (val) {
            this.setAttribute('layout', val);
        }
        else {
            this.removeAttribute('layout');
        }
    }
    get pinned() {
        return this.getAttribute('pinned');
    }
    set pinned(val) {
        if (val) {
            this.setAttribute('pinned', val);
        }
        else {
            this.removeAttribute('pinned');
        }
    }
    get overlay() {
        return this.getAttribute('overlay');
    }
    set overlay(val) {
        if (val) {
            this.setAttribute('overlay', val);
        }
        else {
            this.removeAttribute('overlay');
        }
    }
}
customElements.define('site-header', SiteHeader);
export default SiteHeader;
