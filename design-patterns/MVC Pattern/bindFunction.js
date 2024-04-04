function Model(text) {
    this.data = text;
};

function View() {
    this.initialize = function(displayButtonProcess, binder) {
        this.displayButton = document.getElementById('displayButton');
        this.textBox = document.getElementById('textBox');
        this.displayButton.addEventListener('click', (displayButtonProcess.bind(binder)));
    }
};

function Controller(text) {
    this.model = new Model(text);
    this.view =  new View;
    this.buttonClick = function(event) {
        this.view.textBox.value = this.model.data;
    };
    this.initialize = function(binder) {
        this.view.initialize(this.buttonClick, binder);
    }
};


let x = new Controller("Hello World");
x.initialize(x)
