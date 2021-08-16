const gamesContainer = document.querySelector('[data-game-container]')
const singleGameBlank = document.querySelector('[data-game-blank]')
const addBtnJs = document.querySelector('[data-add]')
const removeBtnJs = document.querySelector('[data-remove]')

addBtnJs.addEventListener('click', e =>{
    const gameCopy = singleGameBlank.cloneNode(true);
    //make a deep clone of a blank game container
    console.log(gameCopy);
    gamesContainer.appendChild(gameCopy);
    //append the blank game container to the main game container
})

removeBtnJs.addEventListener('click', e =>{
    while (singleGameBlank.firstChild) {
        singleGameBlank.removeChild(singleGameBlank.firstChild)
      }
})