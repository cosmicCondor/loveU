const questions = [
    {question: "¿Cuál es nuestra canción favorita? (pista: para la boda)", answer: "la promesa"},
    {question: "¿Cuál es nuestra saga de pelis preferida?", answer: "harry potter"},
    {question: "Ahora debes elegir un numero de puerta del 1 al 4, empezando desde la izquierda:", answer: "2"}
];
let currentQuestion = 0;

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase().trim();
    if (userAnswer === questions[currentQuestion].answer.toLowerCase()) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            document.getElementById("question").textContent = questions[currentQuestion].question;
            document.getElementById("answer").value = "";
            document.getElementById("scene-image").src = `${currentQuestion + 1}.jpeg`;
        } else {
            document.getElementById("question-container").innerHTML = "<h2>Creo que no te esperas lo siguiente, encontrarás una caja blanca, espero que te guste y puedas utilizarlo toda la vida junto a mi. <br> Te amo 🩵 <br> Solo espero que estas navidades sean un poquito mejores que las pasadas 🩵 </h2>"; document
            document.getElementById("scene-image").src = "final.jpeg";
        }
    } else {
        alert("Respuesta incorrecta. Inténtalo de nuevo, mi vida.");
    }
}

window.onload = function() {
    document.getElementById("scene-image").src = "1.jpeg";
};
