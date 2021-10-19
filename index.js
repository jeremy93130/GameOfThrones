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

            $(".personnages").html($(".personnages").html() + `<div class="grid"><div id="img"><img src="${personnage.imageUrl}"> <p class="actor">${personnage.fullName} </p><p class="actor">${personnage.title}</p> </div> </div>`)

        })
    }

    function search(data) {
        data.filter(function (gotNames) {
            gotNames = $("input").val() + gotNames.fullName
            console.log(gotNames)
        })

    } $('form').submit(function (e) {
        e.preventDefault()
    })
})