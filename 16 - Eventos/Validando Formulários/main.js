function submitForm() {
    var myForm = document.forms.myForm;
    if (myForm.message.value === "") {
        alert("A mensagem e obrigatoria");
        return false;
    }
}
