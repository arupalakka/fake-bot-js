const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
let init = 0

const botSay = (data) => {
  return [
    "Halo, Perkenalkan Nama Saya Faisbot, siapa nama kamu ?",
    `Halo ${data?.nama}, berapa usia kamu`,
    `ohhh ${data?.usia}, Hobi kamu apa ?`,
    `wooow sama dong aku juga hobi ${data?.hobi}, btw udah punya musuh nggak ?`,
    `ohh ${data?.pacar}, ya udah kalo gitu selesai mi nah`,
  ]
}

pertanyaan.innerHTML = botSay()[0]
let userData = []

function botStart() {
  init++
  if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ usia: jawaban.value })
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value })
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value })
  } else if (init === 5) {
    finisihing()
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
  }, [1100])
  userData.push(jawaban.value)
  jawaban.value = ""
}

function finisihing() {
  pertanyaan.innerHTML = `terima kasih sudah mampir bro ${userData[0]} !!!`
  jawaban.value = "siap sama sama"
}

function botEnd() {
  window.location.reload()
}
