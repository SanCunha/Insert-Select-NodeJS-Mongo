$(document).ready(function () {
    $('#CADASTRO').submit(function( event ) {
        event.preventDefault();

        const inputs = Object.values($( this ).serializeArray());

        var stringJSON = "{\n"

        for (let i = 0; i < inputs.length; i++) {
            if (i != inputs.length - 1) {
                stringJSON += "\"" + inputs[i].name + "\": \"" + inputs[i].value + "\",\n";
            } else {
                stringJSON += "\"" + inputs[i].name + "\": \"" + inputs[i].value + "\"\n";
            }
            
        }
        stringJSON += "}"
        console.log(stringJSON)
        const URL = "http://localhost:3333/cadastro"
        axios({
            method: 'post', // verbo http
            url: URL, // url
            data: jQuery.parseJSON(stringJSON)
          })
          .then(response => {
              console.log(response)
          })
          .catch(error => {
              console.log(error)
          })
    })
})