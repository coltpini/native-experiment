const {Story, Props} = require('element-storybook');

let story = new Story('fly-detail');

story.addProp('src')
.addProp('href')
.addProp('slot');

story.add(`base`, `
    <fly-detail 
        name="Duck"
        img="https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_%288374802487%29.jpg"
        size="really big"
        note="The biggest fly I have ever seen, though I don't know if it will catch anything except tourists."
        tags="duck,big,ocean,dry"
        material="<ul><li>Lots of Air</li><li>350 ft. of Rope</li><li>3048 ft<sup>2</sup> Nylon</li></ul>"
        description="Large and yellow. About 130 ft. tall and the scariest duck I have ever come across"
    ></fly-detail>
`);

module.exports = story;
