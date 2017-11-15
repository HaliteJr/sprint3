
function choose_ship01() {
    document.getElementById('ship01').innerHTML = '<img src="assets_customized/ship01select.png">';
    unchoose_ship02();
    unchoose_ship03();
    unchoose_ship04();
}

function choose_ship02() {
    document.getElementById('ship02').innerHTML = '<img src="assets_customized/ship02select.png">';
    unchoose_ship01();
    unchoose_ship03();
    unchoose_ship04();
}

function choose_ship03() {
    document.getElementById('ship03').innerHTML = '<img src="assets_customized/ship03select.png">';
    unchoose_ship01();
    unchoose_ship02();
    unchoose_ship04();
}

function choose_ship04() {
    document.getElementById('ship04').innerHTML = '<img src="assets_customized/ship04select.png">';
    unchoose_ship01();
    unchoose_ship02();
    unchoose_ship03();
}

function unchoose_ship01() {
    document.getElementById('ship01').innerHTML = '<img src="assets_customized/ship01.png">';
}

function unchoose_ship02() {
    document.getElementById('ship02').innerHTML = '<img src="assets_customized/ship02.png">';
}

function unchoose_ship03() {
    document.getElementById('ship03').innerHTML = '<img src="assets_customized/ship03.png">';
}

function unchoose_ship04() {
    document.getElementById('ship04').innerHTML = '<img src="assets_customized/ship04.png">';
}