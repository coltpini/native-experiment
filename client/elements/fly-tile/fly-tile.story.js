const {Story, Props} = require('element-storybook');

let story = new Story('fly-tile');

story.addProp('src')
.addProp('href')
.addProp('slot');

story.add(`base`, `
    <fly-tile href="#" img="https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_%288374802487%29.jpg">Some Item</fly-tile>
`)
.add(`overlay`, `
<fly-tile href="#" img="https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_%288374802487%29.jpg" overlay>Some Item</fly-tile>
`);

module.exports = story;
