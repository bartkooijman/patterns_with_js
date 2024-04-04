function Model(text) {
    this.data = text;
};

function View() {
    this.initialize = function(displayButtonProcess) {
        this.displayButton = document.getElementById('displayButton');
        this.textBox = document.getElementById('textBox');
        this.displayButton.addEventListener('click', displayButtonProcess);
    }
};

function Controller(text) {
    this.model = new Model(text);
    this.view =  new View;
    this.buttonClick = () => this.view.textBox.value = this.model.data;
    this.initialize = function() {
        this.view.initialize(this.buttonClick);
    }
};


let x = new Controller("Hello World");
x.initialize()
