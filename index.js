var Nombre1 = Math.floor(Math.random() * 28) + 1;
var Nombre2 = Math.floor(Math.random() * 28) + 1;
var col1
var col2;
var Blockv;
const audio = new Audio();
audio.src = "Chinese DOIT sound effect.mp3";

const button = new Audio();
button.src = "app button click sound.mp3";

document.getElementById('v1').style.display = 'none';
document.getElementById('v7').style.display = 'none';
document.getElementById('v2').style.display = 'none';
document.getElementById('v3').style.display = 'none';
document.getElementById('v4').style.display = 'none';
document.getElementById('v5').style.display = 'none';
document.getElementById('v6').style.display = 'none';
document.getElementById('v8').style.display = 'none';
document.getElementById('v9').style.display = 'none';
document.getElementById('r1').style.display = 'none';
document.getElementById('r7').style.display = 'none';
document.getElementById('r2').style.display = 'none';
document.getElementById('r3').style.display = 'none';
document.getElementById('r4').style.display = 'none';
document.getElementById('r5').style.display = 'none';
document.getElementById('r6').style.display = 'none';
document.getElementById('r8').style.display = 'none';
document.getElementById('r9').style.display = 'none';
document.getElementById('jv1').style.display = 'none';
document.getElementById('jv7').style.display = 'none';
document.getElementById('jv2').style.display = 'none';
document.getElementById('jv3').style.display = 'none';
document.getElementById('jv4').style.display = 'none';
document.getElementById('jv5').style.display = 'none';
document.getElementById('jv6').style.display = 'none';
document.getElementById('jv8').style.display = 'none';
document.getElementById('jv9').style.display = 'none';
document.getElementById('jr1').style.display = 'none';
document.getElementById('jr7').style.display = 'none';
document.getElementById('jr2').style.display = 'none';
document.getElementById('jr3').style.display = 'none';
document.getElementById('jr4').style.display = 'none';
document.getElementById('jr5').style.display = 'none';
document.getElementById('jr6').style.display = 'none';
document.getElementById('jr8').style.display = 'none';
document.getElementById('jr9').style.display = 'none';
document.getElementById('jb1').style.display = 'none';
document.getElementById('jb7').style.display = 'none';
document.getElementById('jb2').style.display = 'none';
document.getElementById('jb3').style.display = 'none';
document.getElementById('jb4').style.display = 'none';
document.getElementById('jb5').style.display = 'none';
document.getElementById('jb6').style.display = 'none';
document.getElementById('jb8').style.display = 'none';
document.getElementById('jb9').style.display = 'none';

document.getElementById('b1').style.display = 'none';
document.getElementById('b7').style.display = 'none';
document.getElementById('b2').style.display = 'none';
document.getElementById('b3').style.display = 'none';
document.getElementById('b4').style.display = 'none';
document.getElementById('b5').style.display = 'none';
document.getElementById('b6').style.display = 'none';
document.getElementById('b8').style.display = 'none';
document.getElementById('b9').style.display = 'none';

document.getElementById('jp4').style.display = 'none';
document.getElementById('p4').style.display = 'none';

if (Nombre1 == 1) {
    col1 = "vert1";
    Blockv = "1";
    document.getElementById('v1').style.display = 'block';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 7) {
    col1 = "vert7";
    Blockv = "7";
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v7').style.display = 'block';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 2) {
    col1 = "vert2";
    Blockv = "2";
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v2').style.display = 'block';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 3) {
    col1 = "vert3";
    Blockv = "3";
    document.getElementById('v3').style.display = 'block';
} else if (Nombre1 == 4) {
    col1 = "vert4";
    Blockv = "4";
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v4').style.display = 'block';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 5) {
    col1 = "vert5";
    Blockv = "5";
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v5').style.display = 'block';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 6) {
    col1 = "vert6";
    Blockv = "6";
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v6').style.display = 'block';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 8) {
    col1 = "vert8";
    Blockv = 8;
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v8').style.display = 'block';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
}
else if (Nombre1 == 9) {
    col1 = "vert9";
    Blockv = "9";
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v9').style.display = 'block';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
}





if (Nombre1 == 10) {
    col1 = "rouge1";
    Blockv = "10";
    document.getElementById('r1').style.display = 'block';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('r9').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 16) {
    col1 = "rouge7";
    Blockv = "16";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'block';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('r9').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 11) {
    col1 = "rouge2";
    Blockv = "11";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('r9').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 12) {
    col1 = "rouge3";
    Blockv = "12";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('r3').style.display = 'block';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('r9').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 13) {
    col1 = "rouge4";
    Blockv = "13";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('r4').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('r9').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 14) {
    col1 = "rouge5";
    Blockv = "14";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('r5').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('r9').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 15) {
    col1 = "rouge6";
    Blockv = "15";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('r6').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('r9').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre1 == 17) {
    col1 = "rouge8";
    Blockv = "17";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('r8').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r9').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
}
else if (Nombre1 == 18) {
    col1 = "rouge9";
    Blockv = "18";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('r9').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
}




else if (Nombre1 == 19) {
    col1 = "bleu1";
    Blockv = "19";
    document.getElementById('b1').style.display = 'block';
} else if (Nombre1 == 20) {
    col1 = "bleu2";
    Blockv = "20";
    document.getElementById('b2').style.display = 'block';
} else if (Nombre1 == 21) {
    col1 = "bleu3";
    Blockv = "21";
    document.getElementById('b3').style.display = 'block';
} else if (Nombre1 == 22) {
    col1 = "bleu4";
    Blockv = "22";
    document.getElementById('b4').style.display = 'block';
} else if (Nombre1 == 23) {
    col1 = "bleu5";
    Blockv = "23";
    document.getElementById('b5').style.display = 'block';
} else if (Nombre1 == 24) {
    col1 = "bleu6";
    Blockv = "24";
    document.getElementById('b6').style.display = 'block';
} else if (Nombre1 == 25) {
    col1 = "bleu7";
    Blockv = "25";
    document.getElementById('b7').style.display = 'block';
} else if (Nombre1 == 26) {
    col1 = "bleu8";
    Blockv = "26";
    document.getElementById('b8').style.display = 'block';
} else if (Nombre1 == 27) {
    col1 = "bleu9";
    Blockv = "27";
    document.getElementById('b9').style.display = 'block';
} else if (Nombre1 == 28) {
    Blockvv = "plus";
document.getElementById('p4').style.display = 'block';
}

var Blockvv;

if (Nombre2 == 1) {
    col2 = "vert";
    Blockvv = "1v"
    document.getElementById('jv1').style.display = 'block';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 7) {
    col2 = "vert";
    Blockvv = "7v"
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'block';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 2) {
    col2 = "vert";
    Blockvv = "2v"
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'block';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 3) {
    col2 = "vert";
    Blockvv = "3v"
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv3').style.display = 'block';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 4) {
    col2 = "vert";
    Blockvv = "4v"
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv4').style.display = 'block';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 5) {
    col2 = "vert";
    Blockvv = "5v"
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv5').style.display = 'block';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 6) {
    col2 = "vert";
    Blockvv = "6v"
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv6').style.display = 'block';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 8) {
    col2 = "vert";
    Blockvv = "8v"
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv8').style.display = 'block';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
}
else if (Nombre2 == 9) {
    col2 = "vert";
    Blockvv = "9v"
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv9').style.display = 'block';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
} else if (Nombre2 == 19) {
    col2 = "bleu";
    Blockvv = "1b";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('jb1').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre2 == 20) {
    col2 = "bleu";
    Blockvv = "2b";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('jb2').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre2 == 21) {
    col2 = "bleu";
    Blockvv = "3b";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('jb3').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre2 == 22) {
    col2 = "bleu";
    Blockvv = "4b";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('jb4').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre2 == 23) {
    col2 = "bleu";
    Blockvv = "5b";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('jb5').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre2 == 24) {
    col2 = "bleu";
    Blockvv = "6v";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('jb6').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre2 == 25) {
    col2 = "bleu";
    Blockvv = "7b";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('jb7').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre2 == 26) {
    col2 = "bleu";
    Blockvv = "8b";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('jb8').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
} else if (Nombre2 == 27) {
    col2 = "bleu";
    Blockvv = "9b";
    document.getElementById('r1').style.display = 'none';
    document.getElementById('r7').style.display = 'none';
    document.getElementById('r2').style.display = 'none';
    document.getElementById('jb9').style.display = 'block';
    document.getElementById('r3').style.display = 'none';
    document.getElementById('r4').style.display = 'none';
    document.getElementById('r5').style.display = 'none';
    document.getElementById('r6').style.display = 'none';
    document.getElementById('r8').style.display = 'none';
    document.getElementById('v7').style.display = 'none';
    document.getElementById('v1').style.display = 'none';
    document.getElementById('v2').style.display = 'none';
    document.getElementById('v3').style.display = 'none';
    document.getElementById('v4').style.display = 'none';
    document.getElementById('v5').style.display = 'none';
    document.getElementById('v6').style.display = 'none';
    document.getElementById('v8').style.display = 'none';
    document.getElementById('v9').style.display = 'none';
}





if (Nombre2 == 10) {
    col2 = "rouge";
    Blockvv = "10v";
    document.getElementById('jr1').style.display = 'block';
    document.getElementById('jr7').style.display = 'none';
    document.getElementById('jr2').style.display = 'none';
    document.getElementById('jr3').style.display = 'none';
    document.getElementById('jr4').style.display = 'none';
    document.getElementById('jr5').style.display = 'none';
    document.getElementById('jr6').style.display = 'none';
    document.getElementById('jr8').style.display = 'none';
    document.getElementById('jr9').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 16) {
    col2 = "rouge";
    Blockvv = "16v";
    document.getElementById('jr1').style.display = 'none';
    document.getElementById('jr7').style.display = 'block';
    document.getElementById('jr2').style.display = 'none';
    document.getElementById('jr3').style.display = 'none';
    document.getElementById('jr4').style.display = 'none';
    document.getElementById('jr5').style.display = 'none';
    document.getElementById('jr6').style.display = 'none';
    document.getElementById('jr8').style.display = 'none';
    document.getElementById('jr9').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 11) {
    col2 = "rouge";
    Blockvv = "11v";
    document.getElementById('jr1').style.display = 'none';
    document.getElementById('jr7').style.display = 'none';
    document.getElementById('jr2').style.display = 'block';
    document.getElementById('jr3').style.display = 'none';
    document.getElementById('jr4').style.display = 'none';
    document.getElementById('jr5').style.display = 'none';
    document.getElementById('jr6').style.display = 'none';
    document.getElementById('jr8').style.display = 'none';
    document.getElementById('jr9').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 12) {
    Blockvv = "12v";
    col2 = "rouge";
    document.getElementById('jr1').style.display = 'none';
    document.getElementById('jr7').style.display = 'none';
    document.getElementById('jr2').style.display = 'none';
    document.getElementById('jr3').style.display = 'block';
    document.getElementById('jr4').style.display = 'none';
    document.getElementById('jr5').style.display = 'none';
    document.getElementById('jr6').style.display = 'none';
    document.getElementById('jr8').style.display = 'none';
    document.getElementById('jr9').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 13) {
    col2 = "rouge";
    Blockvv = "13v";
    document.getElementById('jr1').style.display = 'none';
    document.getElementById('jr7').style.display = 'none';
    document.getElementById('jr2').style.display = 'none';
    document.getElementById('jr4').style.display = 'block';
    document.getElementById('jr3').style.display = 'none';
    document.getElementById('jr5').style.display = 'none';
    document.getElementById('jr6').style.display = 'none';
    document.getElementById('jr8').style.display = 'none';
    document.getElementById('jr9').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 14) {
    col2 = "rouge";
    Blockvv = "14v";
    document.getElementById('jr1').style.display = 'none';
    document.getElementById('jr7').style.display = 'none';
    document.getElementById('jr2').style.display = 'none';
    document.getElementById('jr5').style.display = 'block';
    document.getElementById('jr3').style.display = 'none';
    document.getElementById('jr4').style.display = 'none';
    document.getElementById('jr6').style.display = 'none';
    document.getElementById('jr8').style.display = 'none';
    document.getElementById('jr9').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 15) {
    col2 = "rouge";
    Blockvv = "15v";
    document.getElementById('jr1').style.display = 'none';
    document.getElementById('jr7').style.display = 'none';
    document.getElementById('jr2').style.display = 'none';
    document.getElementById('jr6').style.display = 'block';
    document.getElementById('jr3').style.display = 'none';
    document.getElementById('jr4').style.display = 'none';
    document.getElementById('jr5').style.display = 'none';
    document.getElementById('jr8').style.display = 'none';
    document.getElementById('jr9').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
} else if (Nombre2 == 17) {
    col2 = "rouge";
    Blockvv = "17v";
    document.getElementById('jr1').style.display = 'none';
    document.getElementById('jr7').style.display = 'none';
    document.getElementById('jr2').style.display = 'none';
    document.getElementById('jr8').style.display = 'block';
    document.getElementById('jr3').style.display = 'none';
    document.getElementById('jr4').style.display = 'none';
    document.getElementById('jr5').style.display = 'none';
    document.getElementById('jr6').style.display = 'none';
    document.getElementById('jr9').style.display = 'none';
    document.getElementById('jv3').style.display = 'none';
    document.getElementById('jv4').style.display = 'none';
    document.getElementById('jv5').style.display = 'none';
    document.getElementById('jv6').style.display = 'none';
    document.getElementById('jv8').style.display = 'none';
    document.getElementById('jv1').style.display = 'none';
    document.getElementById('jv7').style.display = 'none';
    document.getElementById('jv2').style.display = 'none';
    document.getElementById('jv9').style.display = 'none';
}
else if (Nombre2 == 18) {
    col2 = "rouge";
    Blockvv = "18v";
}else if (Nombre2 == 28) {
        document.getElementById('jp4').style.display = 'block';
        }

var verte = document.getElementById('V');

verte.addEventListener('click', function () {
    document.getElementById('v1').style.display = 'none';
document.getElementById('v7').style.display = 'none';
document.getElementById('v2').style.display = 'none';
document.getElementById('v3').style.display = 'none';
document.getElementById('v4').style.display = 'none';
document.getElementById('v5').style.display = 'none';
document.getElementById('v6').style.display = 'none';
document.getElementById('v8').style.display = 'none';
document.getElementById('v9').style.display = 'none';
document.getElementById('r1').style.display = 'none';
document.getElementById('r7').style.display = 'none';
document.getElementById('r2').style.display = 'none';
document.getElementById('r3').style.display = 'none';
document.getElementById('r4').style.display = 'none';
document.getElementById('r5').style.display = 'none';
document.getElementById('r6').style.display = 'none';
document.getElementById('r8').style.display = 'none';
document.getElementById('r9').style.display = 'none';
document.getElementById('jv1').style.display = 'none';
document.getElementById('jv7').style.display = 'none';
document.getElementById('jv2').style.display = 'none';
document.getElementById('jv3').style.display = 'none';
document.getElementById('jv4').style.display = 'none';
document.getElementById('jv5').style.display = 'none';
document.getElementById('jv6').style.display = 'none';
document.getElementById('jv8').style.display = 'none';
document.getElementById('jv9').style.display = 'none';
document.getElementById('jr1').style.display = 'none';
document.getElementById('jr7').style.display = 'none';
document.getElementById('jr2').style.display = 'none';
document.getElementById('jr3').style.display = 'none';
document.getElementById('jr4').style.display = 'none';
document.getElementById('jr5').style.display = 'none';
document.getElementById('jr6').style.display = 'none';
document.getElementById('jr8').style.display = 'none';
document.getElementById('jr9').style.display = 'none';
document.getElementById('jb1').style.display = 'none';
document.getElementById('jb7').style.display = 'none';
document.getElementById('jb2').style.display = 'none';
document.getElementById('jb3').style.display = 'none';
document.getElementById('jb4').style.display = 'none';
document.getElementById('jb5').style.display = 'none';
document.getElementById('jb6').style.display = 'none';
document.getElementById('jb8').style.display = 'none';
document.getElementById('jb9').style.display = 'none';

document.getElementById('b1').style.display = 'none';
document.getElementById('b7').style.display = 'none';
document.getElementById('b2').style.display = 'none';
document.getElementById('b3').style.display = 'none';
document.getElementById('b4').style.display = 'none';
document.getElementById('b5').style.display = 'none';
document.getElementById('b6').style.display = 'none';
document.getElementById('b8').style.display = 'none';
document.getElementById('b9').style.display = 'none';

document.getElementById('jp4').style.display = 'none';
document.getElementById('p4').style.display = 'none';
    button.play();
    document.getElementById('v1').style.display = 'none';
    if (Blockv == "1" && Blockvv == "1v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv1').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
    }
    else if (Blockv == "2" && Blockvv == "2v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv2').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
    }
    else if (Blockv == "3" && Blockvv == "3v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv3').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
    }
    else if (Blockv == "4" && Blockvv == "4v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv4').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
    }
    else if (Blockv == "5" && Blockvv == "5v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv5').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
    }
    else if (Blockv == "6" && Blockvv == "6v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv6').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
    }
    else if (Blockv == "7" && Blockvv == "7v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv7').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
    }
    else if (Blockv == "8" && Blockvv == "8v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv8').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
    }
    else if (Blockv == "9" && Blockvv == "9v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv9').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
    } else if (Blockv == "1" && Blockvv == "10v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv1').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('r1').style.display = 'block';
    } else if (Blockv == "2" && Blockvv == "11v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv2').style.display = 'block';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('r2').style.display = 'block';
    } else if (Blockv == "3" && Blockvv == "12v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv3').style.display = 'block';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('r3').style.display = 'block';
    } else if (Blockv == "4" && Blockvv == "13v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv4').style.display = 'block';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('r4').style.display = 'block';
    } else if (Blockv == "5" && Blockvv == "14v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv5').style.display = 'block';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('r5').style.display = 'block';
    } else if (Blockv == "6" && Blockvv == "15v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv6').style.display = 'block';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('r6').style.display = 'block';
    } else if (Blockv == "7" && Blockvv == "16v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv7').style.display = 'block';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('r7').style.display = 'block';
    } else if (Blockv == "8" && Blockvv == "17v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv8').style.display = 'block';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('r8').style.display = 'block';
    } else if (Blockv == "9" && Blockvv == "18v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jv9').style.display = 'block';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r9').style.display = 'block';
    }

    else if (Blockv == "10" && Blockvv == "1v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr1').style.display = 'block';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
    } else if (Blockv == "11" && Blockvv == "2v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr2').style.display = 'block';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
    } else if (Blockv == "12" && Blockvv == "3v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr3').style.display = 'block';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
    } else if (Blockv == "13" && Blockvv == "4v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr4').style.display = 'block';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
    } else if (Blockv == "14" && Blockvv == "5v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr5').style.display = 'block';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
    } else if (Blockv == "15" && Blockvv == "6v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr6').style.display = 'block';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
    } else if (Blockv == "16" && Blockvv == "7v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr7').style.display = 'block';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
    } else if (Blockv == "17" && Blockvv == "8v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr8').style.display = 'block';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
    } else if (Blockv == "18" && Blockvv == "9v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr9').style.display = 'block';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
    }
    else if (Blockv == "10" && Blockvv == "10v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr1').style.display = 'block';
        document.getElementById('r1').style.display = 'none';
    } else if (Blockv == "11" && Blockvv == "11v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr2').style.display = 'block';
        document.getElementById('r2').style.display = 'none';
    } else if (Blockv == "12" && Blockvv == "12v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr3').style.display = 'block';
        document.getElementById('r3').style.display = 'none';
    } else if (Blockv == "13" && Blockvv == "13v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr4').style.display = 'block';
        document.getElementById('r4').style.display = 'none';
    } else if (Blockv == "14" && Blockvv == "14v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr5').style.display = 'block';
        document.getElementById('r5').style.display = 'none';
    } else if (Blockv == "15" && Blockvv == "15v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr6').style.display = 'block';
        document.getElementById('r6').style.display = 'none';
    } else if (Blockv == "16" && Blockvv == "16v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr7').style.display = 'block';
        document.getElementById('r7').style.display = 'none';
    } else if (Blockv == "17" && Blockvv == "17v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr8').style.display = 'block';
        document.getElementById('r8').style.display = 'none';

    } else if (Blockv == "18" && Blockvv == "18v") {
        alert("Au tour de l'advérsaire")
        document.getElementById('jr9').style.display = 'block';
        document.getElementById('r9').style.display = 'none';
    }else if (Blockv == "19" && Blockvv == "1v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb1').style.display = 'block';
            document.getElementById('jv1').style.display = 'none';
            document.getElementById('v7').style.display = 'none';
            document.getElementById('v2').style.display = 'none';
            document.getElementById('v3').style.display = 'none';
            document.getElementById('v4').style.display = 'none';
            document.getElementById('v5').style.display = 'none';
            document.getElementById('v6').style.display = 'none';
            document.getElementById('v8').style.display = 'none';
            document.getElementById('v9').style.display = 'none';
        }
        else if (Blockv == "20" && Blockvv == "2v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb2').style.display = 'block';
            document.getElementById('v1').style.display = 'none';
            document.getElementById('v7').style.display = 'none';
            document.getElementById('jv2').style.display = 'none';
            document.getElementById('v3').style.display = 'none';
            document.getElementById('v4').style.display = 'none';
            document.getElementById('v5').style.display = 'none';
            document.getElementById('v6').style.display = 'none';
            document.getElementById('v8').style.display = 'none';
            document.getElementById('v9').style.display = 'none';
        }
        else if (Blockv == "21" && Blockvv == "3v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb3').style.display = 'block';
            document.getElementById('v1').style.display = 'none';
            document.getElementById('v7').style.display = 'none';
            document.getElementById('v2').style.display = 'none';
            document.getElementById('jv3').style.display = 'none';
            document.getElementById('v4').style.display = 'none';
            document.getElementById('v5').style.display = 'none';
            document.getElementById('v6').style.display = 'none';
            document.getElementById('v8').style.display = 'none';
            document.getElementById('v9').style.display = 'none';
        }
        else if (Blockv == "22" && Blockvv == "4v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb4').style.display = 'block';
            document.getElementById('v1').style.display = 'none';
            document.getElementById('v7').style.display = 'none';
            document.getElementById('v2').style.display = 'none';
            document.getElementById('v3').style.display = 'none';
            document.getElementById('jv4').style.display = 'none';
            document.getElementById('v5').style.display = 'none';
            document.getElementById('v6').style.display = 'none';
            document.getElementById('v8').style.display = 'none';
            document.getElementById('v9').style.display = 'none';
        }
        else if (Blockv == "23" && Blockvv == "5v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb5').style.display = 'block';
            document.getElementById('v1').style.display = 'none';
            document.getElementById('v7').style.display = 'none';
            document.getElementById('v2').style.display = 'none';
            document.getElementById('v3').style.display = 'none';
            document.getElementById('v4').style.display = 'none';
            document.getElementById('jv5').style.display = 'none';
            document.getElementById('v6').style.display = 'none';
            document.getElementById('v8').style.display = 'none';
            document.getElementById('v9').style.display = 'none';
        }
        else if (Blockv == "24" && Blockvv == "6v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb6').style.display = 'block';
            document.getElementById('v1').style.display = 'none';
            document.getElementById('v7').style.display = 'none';
            document.getElementById('v2').style.display = 'none';
            document.getElementById('v3').style.display = 'none';
            document.getElementById('v4').style.display = 'none';
            document.getElementById('v5').style.display = 'none';
            document.getElementById('jv6').style.display = 'none';
            document.getElementById('v8').style.display = 'none';
            document.getElementById('v9').style.display = 'none';
        }
        else if (Blockv == "25" && Blockvv == "7v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb7').style.display = 'block';
            document.getElementById('v1').style.display = 'none';
            document.getElementById('jv7').style.display = 'none';
            document.getElementById('v2').style.display = 'none';
            document.getElementById('v3').style.display = 'none';
            document.getElementById('v4').style.display = 'none';
            document.getElementById('v5').style.display = 'none';
            document.getElementById('v6').style.display = 'none';
            document.getElementById('v8').style.display = 'none';
            document.getElementById('v9').style.display = 'none';
        }
        else if (Blockv == "26" && Blockvv == "8v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb8').style.display = 'block';
            document.getElementById('v1').style.display = 'none';
            document.getElementById('v7').style.display = 'none';
            document.getElementById('v2').style.display = 'none';
            document.getElementById('v3').style.display = 'none';
            document.getElementById('v4').style.display = 'none';
            document.getElementById('v5').style.display = 'none';
            document.getElementById('v6').style.display = 'none';
            document.getElementById('jv8').style.display = 'none';
            document.getElementById('v9').style.display = 'none';
        }  else if (Blockv == "27" && Blockvv == "9v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb9').style.display = 'block';
            document.getElementById('jv9').style.display = 'none';
            document.getElementById('jr9').style.display = 'none';
        }
        
        else if (Blockv == "19" && Blockvv == "10v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb1').style.display = 'block';
            document.getElementById('b1').style.display = 'block';
            document.getElementById('jr1').style.display = 'none';
            document.getElementById('jv1').style.display = 'none';
        }else if (Blockv == "20" && Blockvv == "11v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb2').style.display = 'block';
            document.getElementById('b2').style.display = 'block';
            document.getElementById('jr2').style.display = 'none';
            document.getElementById('jv2').style.display = 'none';
        }else if (Blockv == "21" && Blockvv == "12v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb3').style.display = 'block';
            document.getElementById('b3').style.display = 'block';
            document.getElementById('jr3').style.display = 'none';
            document.getElementById('jv3').style.display = 'none';
        }else if (Blockv == "22" && Blockvv == "13v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb4').style.display = 'block';
            document.getElementById('jr4').style.display = 'none';
            document.getElementById('b4').style.display = 'block';
            document.getElementById('jv4').style.display = 'none';
        }else if (Blockv == "23" && Blockvv == "14v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb5').style.display = 'block';
            document.getElementById('jr5').style.display = 'none';
            document.getElementById('b5').style.display = 'block';
            document.getElementById('jv5').style.display = 'none';
        }else if (Blockv == "24" && Blockvv == "15v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb6').style.display = 'block';
            document.getElementById('jr6').style.display = 'none';
            document.getElementById('jv6').style.display = 'none';
            document.getElementById('b6').style.display = 'block';
        }else if (Blockv == "25" && Blockvv == "16v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb7').style.display = 'block';
            document.getElementById('jr7').style.display = 'none';
            document.getElementById('jv7').style.display = 'none';
            document.getElementById('b7').style.display = 'block';
        }else if (Blockv == "26" && Blockvv == "17v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb8').style.display = 'block';
            document.getElementById('jr8').style.display = 'none';
            document.getElementById('jv8').style.display = 'none';
            document.getElementById('b8').style.display = 'block';
        }else if (Blockv == "27" && Blockvv == "18v") {
            alert("Au tour de l'advérsaire")
            document.getElementById('jb9').style.display = 'block';
            document.getElementById('jr9').style.display = 'none';
            document.getElementById('jv9').style.display = 'none';
            document.getElementById('b9').style.display = 'block';
        }
        
        
        
        else if (col1 == "vert1" && col2 == "vert") {
        document.getElementById('jv1').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    }
    else if (col1 == "vert2" && col2 == "vert") {
        document.getElementById('jv2').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "vert3" && col2 == "vert") {
        document.getElementById('jv3').style.display = 'block';
    } else if (col1 == "vert4" && col2 == "vert") {
        document.getElementById('jv4').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "vert5" && col2 == "vert") {
        document.getElementById('jv5').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "vert6" && col2 == "vert") {
        document.getElementById('jv6').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "vert7" && col2 == "vert") {
        document.getElementById('jv7').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "vert8" && col2 == "vert") {
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
        document.getElementById('jv8').style.display = 'block';
    } else if (col1 == "vert9" && col2 == "vert") {
        document.getElementById('jv9').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "rouge1" && col2 == "rouge") {
        document.getElementById('jr1').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "rouge2" && col2 == "rouge") {
        document.getElementById('jr2').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "rouge3" && col2 == "rouge") {
        document.getElementById('jr3').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "rouge4" && col2 == "rouge") {
        document.getElementById('jr4').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "rouge5" && col2 == "rouge") {
        document.getElementById('jr5').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "rouge6" && col2 == "rouge") {
        document.getElementById('jr6').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "rouge7" && col2 == "rouge") {
        document.getElementById('jr7').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
    } else if (col1 == "rouge8" && col2 == "rouge") {
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
        document.getElementById('jr8').style.display = 'block';
    } else if (col1 == "rouge9" && col2 == "rouge") {
        document.getElementById('jr9').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
    }  else if (col1 == "bleu1" && col2 == "bleu") {
        document.getElementById('jb1').style.display = 'block';
        document.getElementById('jb7').style.display = 'none';
        document.getElementById('jb2').style.display = 'none';
        document.getElementById('jb3').style.display = 'none';
        document.getElementById('jb4').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb6').style.display = 'none';
        document.getElementById('jb8').style.display = 'none';
        document.getElementById('jb9').style.display = 'none';
        document.getElementById('b1').style.display = 'none';
    }
    else if (col1 == "bleu2" && col2 == "bleu") {
        document.getElementById('jb2').style.display = 'block';
        document.getElementById('jb1').style.display = 'none';
        document.getElementById('jb7').style.display = 'none';
        document.getElementById('jb3').style.display = 'none';
        document.getElementById('jb4').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb6').style.display = 'none';
        document.getElementById('jb8').style.display = 'none';
        document.getElementById('jb9').style.display = 'none';
        document.getElementById('b2').style.display = 'none';
    } else if (col1 == "bleu3" && col2 == "bleu") {
        document.getElementById('jb3').style.display = 'block';
        document.getElementById('jb1').style.display = 'none';
        document.getElementById('jb7').style.display = 'none';
        document.getElementById('jb2').style.display = 'none';
        document.getElementById('jb4').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb6').style.display = 'none';
        document.getElementById('jb8').style.display = 'none';
        document.getElementById('jb9').style.display = 'none';
        document.getElementById('b3').style.display = 'none';
    } else if (col1 == "bleu4" && col2 == "bleu") {
        document.getElementById('jb4').style.display = 'block';
        document.getElementById('jb1').style.display = 'none';
        document.getElementById('jb7').style.display = 'none';
        document.getElementById('jb2').style.display = 'none';
        document.getElementById('jb3').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb6').style.display = 'none';
        document.getElementById('jb8').style.display = 'none';
        document.getElementById('jb9').style.display = 'none';
        document.getElementById('b4').style.display = 'none';
    } else if (col1 == "bleu5" && col2 == "bleu") {
        document.getElementById('jb5').style.display = 'block';
        document.getElementById('jb1').style.display = 'none';
        document.getElementById('jb2').style.display = 'none';
        document.getElementById('jb3').style.display = 'none';
        document.getElementById('jb4').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb6').style.display = 'none';
        document.getElementById('jb8').style.display = 'none';
        document.getElementById('jb9').style.display = 'none';
        document.getElementById('b5').style.display = 'none';
    }else if (col1 == "bleu6" && col2 == "bleu") {
        document.getElementById('jb6').style.display = 'block';
        document.getElementById('jb1').style.display = 'none';
        document.getElementById('jb7').style.display = 'none';
        document.getElementById('jb2').style.display = 'none';
        document.getElementById('jb3').style.display = 'none';
        document.getElementById('jb4').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb8').style.display = 'none';
        document.getElementById('jb9').style.display = 'none';
        document.getElementById('b6').style.display = 'none';
    } else if (col1 == "bleu7" && col2 == "bleu") {
        document.getElementById('jb7').style.display = 'block';
        document.getElementById('jb1').style.display = 'none';
        document.getElementById('jb2').style.display = 'none';
        document.getElementById('jb3').style.display = 'none';
        document.getElementById('jb4').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb6').style.display = 'none';
        document.getElementById('jb8').style.display = 'none';
        document.getElementById('jb9').style.display = 'none';
        document.getElementById('b7').style.display = 'none';
    } else if (col1 == "bleu8" && col2 == "bleu") {
        document.getElementById('jb1').style.display = 'none';
        document.getElementById('jb7').style.display = 'none';
        document.getElementById('jb2').style.display = 'none';
        document.getElementById('jb3').style.display = 'none';
        document.getElementById('jb4').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb6').style.display = 'none';
        document.getElementById('jb9').style.display = 'none';
        document.getElementById('jb8').style.display = 'block';
        document.getElementById('b8').style.display = 'none';
    } else if (col1 == "bleu9" && col2 == "bleu") {
        document.getElementById('jb9').style.display = 'block';
        document.getElementById('jb1').style.display = 'none';
        document.getElementById('jb7').style.display = 'none';
        document.getElementById('jb2').style.display = 'none';
        document.getElementById('jb3').style.display = 'none';
        document.getElementById('jb4').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb6').style.display = 'none';
        document.getElementById('jb8').style.display = 'none';
        document.getElementById('b9').style.display = 'none';

    }else if (Blockvv = "plus"){
        document.getElementById('jp4').style.display = 'block';
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v7').style.display = 'none';
        document.getElementById('v2').style.display = 'none';
        document.getElementById('v3').style.display = 'none';
        document.getElementById('v4').style.display = 'none';
        document.getElementById('v5').style.display = 'none';
        document.getElementById('v6').style.display = 'none';
        document.getElementById('v8').style.display = 'none';
        document.getElementById('v9').style.display = 'none';
        document.getElementById('r1').style.display = 'none';
        document.getElementById('r7').style.display = 'none';
        document.getElementById('r2').style.display = 'none';
        document.getElementById('r3').style.display = 'none';
        document.getElementById('r4').style.display = 'none';
        document.getElementById('r5').style.display = 'none';
        document.getElementById('r6').style.display = 'none';
        document.getElementById('r8').style.display = 'none';
        document.getElementById('r9').style.display = 'none';
        document.getElementById('jv1').style.display = 'none';
        document.getElementById('jv7').style.display = 'none';
        document.getElementById('jv2').style.display = 'none';
        document.getElementById('jv3').style.display = 'none';
        document.getElementById('jv4').style.display = 'none';
        document.getElementById('jv5').style.display = 'none';
        document.getElementById('jv6').style.display = 'none';
        document.getElementById('jv8').style.display = 'none';
        document.getElementById('jv9').style.display = 'none';
        document.getElementById('jr1').style.display = 'none';
        document.getElementById('jr7').style.display = 'none';
        document.getElementById('jr2').style.display = 'none';
        document.getElementById('jr3').style.display = 'none';
        document.getElementById('jr4').style.display = 'none';
        document.getElementById('jr5').style.display = 'none';
        document.getElementById('jr6').style.display = 'none';
        document.getElementById('jr8').style.display = 'none';
        document.getElementById('jr9').style.display = 'none';
        document.getElementById('jb1').style.display = 'none';
        document.getElementById('jb7').style.display = 'none';
        document.getElementById('jb2').style.display = 'none';
        document.getElementById('jb3').style.display = 'none';
        document.getElementById('jb4').style.display = 'none';
        document.getElementById('jb5').style.display = 'none';
        document.getElementById('jb6').style.display = 'none';
        document.getElementById('jb8').style.display = 'none';
        document.getElementById('jb9').style.display = 'none';      
        document.getElementById('b1').style.display = 'none';
        document.getElementById('b7').style.display = 'none';
        document.getElementById('b2').style.display = 'none';
        document.getElementById('b3').style.display = 'none';
        document.getElementById('b4').style.display = 'none';
        document.getElementById('b5').style.display = 'none';
        document.getElementById('b6').style.display = 'none';
        document.getElementById('b8').style.display = 'none';
        document.getElementById('b9').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
    }else {
        audio.play();
        alert("Vous ne pouvez pas mettre cette carte !!!")
    }
})