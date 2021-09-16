class Player{
constructor(){

this.name = null
this.distance = 0
this.index =  null
}

getCount(){

database.ref('playerCount').on('value', function(data){

playerCount = data.val()

})



}


update(){


var playerIndex = 'players/player' + this.index

database.ref(playerIndex).update({

    'name': this.name,
    'distance' : this.distance
})


}

updateCount(count){

database.ref('/').update({

'playerCount': count

})


}


static getAllPlayersInfo(){

database.ref('players').on('value', (data)=>{
    allPlayers = data.val()
})


}



}