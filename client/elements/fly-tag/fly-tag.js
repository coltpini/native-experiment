import buildShadowRoot from '../buildShadowRoot.js';
class FlyTag extends HTMLElement {
    constructor() {
        super();
        const html = `
            <style>
                :host {
                    margin: var(--space-50);
                    padding: var(--space-75) var(--space-100);
                    display: inline-block;
                    background: var(--color-200);
                    border-radius: var(--space-50);
                    font-size: 0.6em;
                    text-transform: uppercase;
                    font-weight: 500;
                }
            </style>
            <slot></slot>
        `;
        buildShadowRoot(html,this);
    }
}

customElements.define('fly-tag', FlyTag);
export default FlyTag;
