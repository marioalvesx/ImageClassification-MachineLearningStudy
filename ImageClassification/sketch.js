let mobilenet;

let classifier; // Variável representando a imagem .jpg a ser analisada

function modelReady() {
    console.log('Model is Ready!!!');
    mobilenet.predict(classifier, gotResults);
}

// Cria Canvas e carrega imagem
function setup() {
    createCanvas(640, 500);
    classifier = createImg('images/penguin1.jpg', imageReady);
    classifier.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function imageReady() {
    image(classifier, 0, 0, width, height);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }else{
        console.log(results);

        // Objeto com maior probabilidade gerada
        let label = results[0].label;
        let max_confidence = results[0].confidence;
        for (var i = 0, tam = results.lenght; i < tam; i++){
            if (results[i].confidence > max_confidence){
                label = results[i].label;
                max_confidence = results[i].confidence;
            }
        }

        fill(0);
        textSize(64);
        text(label, 10, height - 100);
        createP('Label: '+ label);
        createP('Probability: '+ nf(max_confidence * 100, 1, 2) + '%');
    }
}