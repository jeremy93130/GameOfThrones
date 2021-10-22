var gotNames = []

$(function () {
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function (data, statuts, response) {
            console.log(data)
            afficher(data)
            search(data)

        }
    })

    function afficher(data) {
        data.forEach(function (personnage) {

            $(".personnages").html($(".personnages").html() +
                `<div class="grid">
                <div id="img" style="background-image: url(${personnage.imageUrl})"</div>
                 </div> 
                 <span> <p class="actor">${personnage.fullName} </p> <p class="actor"> ${personnage.title}</p> </span></div>`)

        })
    }

    $('input').keyup(function () {
        var inputValue = $("#formu").val()

        var filteredCharacters = characters.filter(function (character) {
            return character.fullName.toLowerCase().includes(inputValue.toLowerCase())
        })

        displayList(filteredCharacters)
    })
})