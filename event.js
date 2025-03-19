function validate() {
    let value_name = document.getElementById("input_name").value;
    let value_car = document.getElementById("input_car").value;
    let value_number = document.getElementById("input_numb").value;

    if (value_name == "") {
        alert("A név nincs kitöltve");
    } else if (value_car == "") {
        alert("A kocsi típus nincs kitöltve");
    } else if (value_number == "" || value_number < 0) {
        alert("Rossz kilométer van megadva");
    }

    if(value_name && value_car && value_number && value_number > 0) {
        alert("Mindegyik sikeresen kitöltve");
    }
}