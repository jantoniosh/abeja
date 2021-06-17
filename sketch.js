var r_ojos, r_alas, m_cont, v_msg, cara, inicio;
var cb_0, cb_1, cb_x, cc_0, cc_1, cc_x, ca_0, ca_1, ca_x;
var lf = 10; 

let sonido;

function preload() {
    sonido = loadSound('zumbido.ogg');
}

function setup() {
	canvas_1 = createCanvas(300, 350);
	canvas_1.parent('abeja');
    let col = color(25, 23, 200, 50);
	// Colores Fondo
	cb_0 = color(255, 105, 97);
	cb_1 = color(0, 150, 158);
	cb_x = cb_0;


	// Colores Cuerpo
	cc_0 = color(253, 253, 150);
	cc_1 = color(2, 2, 155);
	cc_x = cc_0;

	// Colores Alas
	ca_0 = color(253, 253, 150, 100);
	ca_1 = color(2, 2, 155, 100);
	ca_x = ca_0;
	cara = false;
    inicio = false;
}

function draw() {
	background(cb_x);
	push();
    scale(0.5, 0.5);
    translate(0, 40);
	// Aguijón
	fill(0);
	triangle(350, 450, 250, 450, 300, 530);

	// alas
    if (inicio) {
        r_alas = random(120, 150);
    }

    else {
        r_alas = 150; 
    }
	 
	fill(ca_x);
	noStroke();
	ellipse(150, 260, r_alas, r_alas);
	ellipse(150, 380, r_alas, r_alas);
	ellipse(450, 260, r_alas, r_alas);
	ellipse(450, 380, r_alas, r_alas);


	// Cuerpo
	noStroke();
	fill(cc_x);
	ellipse(300, 330, 250, 300);
	// Rayas Negras
	fill(0);
    arc(300, 330, 250, 300, 1.1 *PI, 1.9 * PI, CHORD);
    arc(300, 330, 250, 300, 2.1 *PI, 2.9 * PI, CHORD);
    // Completar Cuerpo
    fill(cc_x);
    arc(300, 330, 250, 300, 1.2 *PI, 1.8 * PI, CHORD);
    arc(300, 330, 250, 300, 2.2 *PI, 2.8 * PI, CHORD);

    noFill();
    stroke(0);
    strokeWeight(6);
    ellipse(300, 330, 250, 300);

    // Antenas
    noFill();
    arc(250, 50, 40, 80, PI, 2.5*PI);
    arc(350, 50, 40, 80, .5*PI, 2*PI);
    fill(0);
    ellipse(230, 50, 10, 10);
    ellipse(370, 50, 10, 10);

    // Rostro
    fill(cc_x);
    ellipse(300, 130, 150, 150);
    if (cara) {
    	// Ojos
    	r_ojos = random(10, 30);
    	fill(0);
    	ellipse(275, 100, r_ojos, r_ojos);
    	ellipse(325, 100, r_ojos, r_ojos);

    	// Sonrisa
    	noFill();
    	arc(290,150,20,20,2*PI,3*PI);
    	arc(310,150,20,20,2*PI,3*PI);
    }
    else {
    	noFill();
    	arc(275, 100, 15, 15, PI, 2*PI);
    	arc(325, 100, 15, 15, PI, 2*PI);
    	// Sonrisa
    	arc(300,150,40,20,2*PI,3*PI);
    }
    pop();
}

function ojos() {
    cara = !cara;
}

$( document ).ready(function() {
    $("#controles").hide();

    $("#continuar").click(function(){
        $("#controles").show();
        $("#bienvenida").hide();
        sonido.loop();
        inicio = true;
    });

    $("#boton_1").click(function(){
        console.log("Click en Botón");
        ojos();
    });

    $(document).on('input', '#cuerpo', function() {
        var amt_c = $("#cuerpo").val();
        cc_x = lerpColor(cc_0, cc_1, amt_c);
    });

    $(document).on('input', '#alas', function() {
        var amt_a = $("#alas").val();
        ca_x = lerpColor(ca_0, ca_1, amt_a);
    });

    $(document).on('input', '#fondo', function() {
        var amt_b = $("#fondo").val();
        cb_x = lerpColor(cb_0, cb_1, amt_b);
        var r = red(cb_x);
        var g = green(cb_x);
        var b = blue(cb_x);
        $("body").css("background-color", "rgb(" + r + "," + g + "," + b +")");
    }); 
});