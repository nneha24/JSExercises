function getDayOfWeek(week) {
    
    switch(week){
        case 1: 
        console.log('You have selected Monday:WeeKday');
        break;
        case 2: 
        console.log('You have selected Tuesday:WeeKday');
        break;
        case 3: 
        console.log('You have selected Wednesday:WeeKday');
        break;
        case 4: 
        console.log('You have selected Thursday:WeeKday');
        break;
        case 5: 
        console.log('You have selected Friday:WeeKday');
        break;
        case 6: 
        console.log('You have selected Saturday:Weekend');
        break;
        case 7: 
        console.log('You have selected Sunday:Weekend');
        break;
        default:
         return console.log('Select valid weekday');

    }
}