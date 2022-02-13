// Convertendo Valores para String
String(123); // -> "123"
String(true)(
    // -> "true"

    123
).toString(); // -> "123"
true.toString(); // -> "true"

// Convertendo Valores para Number
Number("3"); // -> 3
Number("3.14"); // -> 3.14
Number("abc"); // -> NaN
Number(false); // -> 0
Number(true); // -> 1

parseInt("3"); // -> 3
parseInt("3.14"); // -> 3
parseInt("abc"); // -> NaN
parseFloat("3"); // -> 3
parseFloat("3.14"); // -> 3.14
parseFloat("abc"); // -> NaN
