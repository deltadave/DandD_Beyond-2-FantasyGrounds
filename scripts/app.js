debug = true
characterID = 0
charFmt = ''
charURL = ''
const outputElement = document.getElementById("characterXMLData")
const myHeaders = new Headers();

function characterTypeButton() {
  document.getElementById("exportCharType").innerHTML = `
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Format</button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Classic</a>
      <a class="dropdown-item" href="#">Unity</a>
    </div>
  `
}

characterTypeButton()

$(function(){ //update button value to selection and call
  $(".dropdown-menu a").click(function(){
    $(".btn:first-child").text($(this).text())
    $(".btn:first-child").val($(this).text())
    characterID = $("#charID").val()
    charFmt = $(this).text()
/*
    if (!debug) {
      charURL = `https://www.dndbeyond.com/character/${characterID}/json`
    } else {
      charURL = `https://raw.githubusercontent.com/deltadave/DandD_Beyond-2-FantasyGrounds/master/data/xerseris.json`
    }

    const myRequest = new Request( charURL, {
      method: 'GET',
      headers: myHeaders,
      mode: 'no-cors',
      cache: 'default',
    });

    async function fetchCharacter() {
      const response = await fetch(charURL)
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
      }

      const character = await response.json()
      return character
    }

    const characterJSON = fetchCharacter()

    console.log(characterJSON)
    //let y = document.createTextNode("characterJSON.valueOf()")
    //outputElement.appendChild(y)


        /*
        then(function (response) {
          if (!response.ok) {
            console.log('Error: ', response)
          }
          return response.json();
        })
            .then(function (json) {
              document.write(json.value)
            })
            .catch(function (error) {
              var p = document.createElement('p')
              p.appendChild(
                  document.createTextNode('Error: ' + error.message)
              )
              document.body.insertBefore(p, outputElement)
            })
         */

  });
});