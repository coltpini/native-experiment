const {Story, Props} = require('element-storybook');

let story = new Story('filter-list');

story.addProp('tags')
.addProp('active')
.addProp('slot');

story.addSlotElement('fly-tile');

const makeTiles = (number = 1) => {
    const tags = ['one', 'two', 'three'];
    const string = `
        <fly-tile img="/static/assets/img/thumb/BagRzdWCEAAzdxZ.jpg" data-tags="${tags[0]}, test-${tags[0]}, test ${tags[0]}">One</fly-tile>
        <fly-tile img="/static/assets/img/thumb/BYkk5KgCIAAVtFa.jpg" data-tags="${tags[1]}, test-${tags[1]}, test ${tags[1]}">Two</fly-tile>
        <fly-tile img="/static/assets/img/thumb/BZm9hVQCAAA43cR.jpg" data-tags="${tags[2]}, test-${tags[2]}, test ${tags[2]}">Three</fly-tile>
    `;
    let s = ''
    while(number--){
        s += string;
    }
    return s
}

story.add(`base`, `
    <filter-list tags="one,test-two,test three" active="one">
        ${makeTiles(4)}
    </filter-list>
`);

module.exports = story;
