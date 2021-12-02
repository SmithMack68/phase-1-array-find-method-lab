




 
function superbowlWin(record){
    let matchedItem = record.find((element) =>{
        return element.result === "W"
    })
        if(matchedItem){
            return matchedItem.year
        }
         else{
             return matchedItem
         }   
   }
//    superbowlWin(record, "W");








// if(matchedItem = true)
// }
// function isWin(array) {
//     const winner = array.find(isWin);
//     if (winner) {
//         return winner.team;
//     } return winner;
// }

