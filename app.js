const Container = document.querySelector('.container');

const NewDiv = document.createElement('div');
const TextNode = document.createTextNode("This is created with javascript");
NewDiv.appendChild(TextNode);
Container.appendChild(NewDiv);