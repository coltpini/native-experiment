const {Story, Props} = require('element-storybook');

let story = new Story('fly-tag');

story.addProp('slot');

story.add(`base`, `<fly-tag>Some Tag</fly-tag>`)
.add(`multiple`, `<fly-tag>Some Tag</fly-tag><fly-tag>Another Tag</fly-tag><fly-tag>A Third One</fly-tag>`);

module.exports = story;
