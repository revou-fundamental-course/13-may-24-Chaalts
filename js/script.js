//Luas Segitiga//
function hitungluas() {
    alas= document.getElementById("alas").value;
    tinggi= document.getElementById("tinggi").value;
    luas= 1/2*alas*tinggi;
    document.getElementById("luas").value=luas;
}

function resetluas() {
    const alas = document.querySelector('#alas');
    const tinggi = document.querySelector('#tinggi');
    const luas = document.querySelector('#luas');
    alas.value = null;
    tinggi.value = null;
    luas.value = null;
}

//Keliling Segitiga//
function hitungkeliling() {
    sisi1= document.getElementById("sisi-1").value;
    sisi2= document.getElementById("sisi-2").value;
    sisi3= document.getElementById("sisi-3").value;
    keliling= parseInt(sisi1)+parseInt(sisi2)+parseInt(sisi3);
    document.getElementById("keliling").value=keliling;
}

function resetkeliling() {
    const sisi1 = document.querySelector('#sisi-1');
    const sisi2 = document.querySelector('#sisi-2');
    const sisi3 = document.querySelector('#sisi-3');
    const keliling = document.querySelector('#keliling');
    sisi1.value = null;
    sisi2.value = null;
    sisi3.value = null;
    keliling.value = null;
}

