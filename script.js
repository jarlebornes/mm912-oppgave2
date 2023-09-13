let mittTall = Math.floor(Math.random() * 100);
console.log("Mitt tall", mittTall)

function sjekkGjetting() {
  let dittGjett = gjett.value
  if (dittGjett == mittTall) {
    tilbakemelding.textContent = "Du gjettet: " + dittGjett + "  Det er helt riktig!!!"
  } else if (dittGjett > mittTall) {
      tilbakemelding.textContent = "Du gjettet: " + dittGjett + "  Det er for høyt"
  } else if (dittGjett < mittTall) {
      tilbakemelding.textContent = "Du gjettet: " + dittGjett + "  Det er for lavt"
      }
    }
svar.addEventListener("click", sjekkGjetting)