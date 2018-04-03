const {Story, Props} = require('element-storybook');

let story = new Story('tile-grid');

story.addProp('size', ['small','medium','large'])
.addProp('gap', 'bool')
.addProp('slot');

story.addSlotElement('fly-tile')

const makeTiles = (number = 1, insert = '') => {
    const string = `
        <fly-tile img="/static/assets/img/thumb/BagRzdWCEAAzdxZ.jpg" ${insert}>Ginger Quill</fly-tile>
        <fly-tile img="/static/assets/img/thumb/BYkk5KgCIAAVtFa.jpg" ${insert}>Royal Coachman</fly-tile>
        <fly-tile img="/static/assets/img/thumb/BZm9hVQCAAA43cR.jpg" ${insert}>Adams</fly-tile>
    `
    let s = ''
    while(number--){
        s += string;
    }
    return s
}

story.add(`base`, `
    <tile-grid>
        ${makeTiles(4)}
    </tile-grid>
`)
.add(`overlayed`, `
    <tile-grid>
        ${makeTiles(4, 'overlay')}
    </tile-grid>
`)
.add(`gap`, `
    <tile-grid gap>
        ${makeTiles(4, 'overlay')}
    </tile-grid>
`)
.add(`small`, `
    <tile-grid size="small">
        ${makeTiles(4)}
    </tile-grid>
`)
.add(`large`, `
    <tile-grid size="large">
        ${makeTiles(4, 'overlay')}
    </tile-grid>
`);

module.exports = story;
