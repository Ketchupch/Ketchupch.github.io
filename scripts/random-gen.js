document.getElementById("reroll").onclick = function click(){

    let characters = ["Android 16", "Android 17", "Android 18", 
    "Android 21", "Beerus", "Captin Ginyu", "Cell", "Frieza", "Gohan (Teen)", 
    "Gohan (Adult)", "Goku (Super Saiyan)", "Goku (SSGSS)", "Goku Black", "Gotenks", 
    "Hit", "Kid Buu", "Krillin", "Majin Buu", "Nappa", "Piccolo", "Tien", 
    "Vegeta (Super Saiyan)", "Vegeta (SSGSS)", "Yamcha", "Bardock", "Broly", "Cooler", 
    "Goku Base", "Vegeta Base", "Vegito (SSGSS)", "Zamasu (Fused)", "Broly (DBS)", 
    "Gogeta (SSGSS)", "Goku (GT)", "Janemba", "Jiren", "Videl", "Goku (UI)", "Kefla", 
    "Master Roshi", "Super Baby 2"];

    let choice1 = Math.floor(Math.random() * characters.length);
    let choice2 = Math.floor(Math.random() * characters.length);
    let choice3 = Math.floor(Math.random() * characters.length);

    while(choice2 == choice1 || choice2 == choice3){
        choice2 = Math.floor(Math.random() * characters.length);
    }
    while(choice3 == choice2 || choice2 == choice1){
        choice3 = Math.floor(Math.random() * characters.length);
    }

    document.getElementById("c1").innerHTML = characters[choice1];
    document.getElementById("c2").innerHTML = characters[choice2];
    document.getElementById("c3").innerHTML = characters[choice3];

}