function message() {
    var number = Math.trunc(Math.random() * 3 + 1);

    switch (number) {
        case 1:
            console.log("oi");
            break;
        case 2:
            console.log("ola");
            break;
        case 3:
            console.log("ei");
            break;

        default:
            break;
    }
}

message();
