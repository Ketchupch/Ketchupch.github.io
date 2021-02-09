document.getElementById("reroll").onclick = function click(){

    let characters = ["Android 16", "Android 17", "Android 18", 
    "Android 21", "Beerus", "Captin Ginyu", "Cell", "Frieza", "Gohan (Teen)", 
    "Gohan (Adult)", "Goku (Super Saiyan)", "Goku (SSGSS)", "Goku Black", "Gotenks", 
    "Hit", "Kid Buu", "Krillin", "Majin Buu", "Nappa", "Piccolo", "Tien", 
    "Vegeta (Super Saiyan)", "Vegeta (SSGSS)", "Yamcha", "Bardock", "Broly", "Cooler", 
    "Goku (Base)", "Vegeta (Base)", "Vegito (SSGSS)", "Zamasu (Fused)", "Broly (DBS)", 
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

    var audio =  new Audio("dbz.mp3");
    audio.play();

    //please ignore this horribleness below

    switch(choice1){
        case 0: //Android 16
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1b/Android_16_Artwork.png/revision/latest?cb=20180902173209";
            break;
        case 1: //Android 17
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/a/a8/Android_17_Artwork.png/revision/latest?cb=20180921112244";
            break;
        case 2: //Android 18
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/c/c1/Android_18_Artwork.png/revision/latest?cb=20180902173221";
            break;
        case 3: //Android 21
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/6/69/Android_21_Artwork.png/revision/latest?cb=20180902173236";
            break;
        case 4: //Beerus
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/17/Beerus_Artwork.png/revision/latest?cb=20180902173306";
            break;
        case 5: //Captain Ginyu
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/12/Captain_Ginyu_Artwork.png/revision/latest/scale-to-width-down/350?cb=20180914190847";
            break;
        case 6: //Cell
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b4/Cell_Artwork.png/revision/latest?cb=20180914190920";
            break;
        case 7: //Frieza
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/59/Frieza_Artwork.png/revision/latest?cb=20180902173332";
            break;
        case 8: //Gohan (Teen)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/c/c6/Gohan_%28Teen%29_Artwork.png/revision/latest?cb=20180914190755";
            break;
        case 9: //Gohan (Adult)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/ba/Gohan_%28Adult%29_Artwork.png/revision/latest?cb=20180902173350";
            break;
        case 10:    //Goku Super Saiyan
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b1/Goku_%28Super_Saiyan%29_Artwork.png/revision/latest?cb=20180914190656";
            break;
        case 11:    //Goku (SSGSS)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/2/2b/Goku_%28SSGSS%29_Artwork.png/revision/latest/scale-to-width-down/163?cb=20180902173408";
            break;
        case 12:    //Goku Black
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/d/d7/Goku_Black_Artwork.png/revision/latest?cb=20180902173440";
            break;
        case 13:    //Gotenks
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b4/Gotenks_Artwork.png/revision/latest?cb=20180902173502";
            break;
        case 14:    //Hit
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b2/Hit_Artwork.png/revision/latest?cb=20180902173526";
            break;
        case 15:    //Kid Buu
            document.getElementById("c1img").src = "http://dustloop.com/wiki/images/thumb/c/c0/DBFZ_Kid_Buu_Portrait.png/245px-DBFZ_Kid_Buu_Portrait.png";
            break;
        case 16:    //Krillin
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/51/Krillin_Artwork.png/revision/latest?cb=20180902173557";
            break;
        case 17:    //Majin Buu
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/6/62/Majin_Buu_Artwork.png/revision/latest?cb=20180902173633";
            break;
        case 18:    //Nappa
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/7/77/Nappa_Artwork.png/revision/latest?cb=20180914191045";
            break;
        case 19:    //Piccolo
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/e/ec/Piccolo_Artwork.png/revision/latest?cb=20180914190738";
            break;
        case 20:    //Tien
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/c/c8/Tien_Artwork.png/revision/latest?cb=20180902173650";
            break;
        case 21:    //Vegeta (Super Saiyan)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/14/Vegeta_%28Super_Saiyan%29_Artwork.png/revision/latest?cb=20180902173731";
            break;
        case 22:    //Vegeta (SSGSS)
            document.getElementById("c1img").src = "https://www.dustloop.com/wiki/images/thumb/7/7e/DBFZ_SSB_Vegeta_Portrait.png/163px-DBFZ_SSB_Vegeta_Portrait.png";
            break;
        case 23:    //Yamcha
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b6/Yamcha_Artwork.png/revision/latest?cb=20180914191111";
            break;
        case 24:    //Bardock
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/9/97/Bardock_Artwork.png/revision/latest?cb=20180902173253";
            break;
        case 25:    //Broly
            document.getElementById("c1img").src = "http://dustloop.com/wiki/images/thumb/b/ba/DBFZ_Broly_Portrait.png/283px-DBFZ_Broly_Portrait.png";
            break;
        case 26:    //Cooler
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/f/f2/Cooler_Artwork.png/revision/latest?cb=20180914191343";
            break;
        case 27:    //Goku (Base)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/e/ea/Goku_Artwork.png/revision/latest?cb=20180902173423";
            break;
        case 28:    //Vegeta (Base)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/4/4f/Vegeta_Artwork.png/revision/latest?cb=20180902173806";
            break;
        case 29:    //Vegito (SSGSS)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/7/72/Vegito_%28SSGSS%29_Artwork.png/revision/latest?cb=20180902173822";
            break;
        case 30:    //Zamasu (Fused)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/0/03/Zamasu_%28Fused%29_Artwork.png/revision/latest?cb=20180902173842";
            break;
        case 31:    //Broly (DBS) (My fav ;) )
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/f/f1/Broly_%28DBS%29_Artwork.png/revision/latest?cb=20191205173206";
            break;
        case 32:    //Gogeta (SSGSS)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1a/Gogeta_%28SSGSS%29_Artwork.png/revision/latest?cb=20190924154249";
            break;
        case 33:    //Goku (GT)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/3/37/Goku_%28GT%29_Artwork.png/revision/latest?cb=20190322172910";
            break;
        case 34:    //Janemba
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/3/33/Janemba_Artwork.png/revision/latest?cb=20190805175120";
            break;
        case 35:    //Jiren
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1e/Jiren_Artwork.png/revision/latest?cb=20190131101001";
            break;
        case 36:    //Videl
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1d/Videl_Artwork.png/revision/latest?cb=20190131101041";
            break;
        case 37:    //Goku (UI)
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/58/Goku_%28Ultra_Instinct%29_Artwork.png/revision/latest?cb=20200508233232";
            break;
        case 38:    //Kefla
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/5e/Kefla_Artwork.png/revision/latest?cb=20200226051238";
            break;
        case 39:    //Master Roshi
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/0/09/Master_Roshi_Artwork.png/revision/latest?cb=20200919034409";
            break;
        case 40:    //Super Baby 2
            document.getElementById("c1img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/9/93/Super_Baby_2_Render.png/revision/latest/scale-to-width-down/239?cb=20210114000036";
            break;
        default:
            document.getElementById("c1img").src = "http://www.dustloop.com/wiki/images/0/06/DBFZ_Logo.png";
            
    }

    switch(choice2){
        case 0: //Android 16
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1b/Android_16_Artwork.png/revision/latest?cb=20180902173209";
            break;
        case 1: //Android 17
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/a/a8/Android_17_Artwork.png/revision/latest?cb=20180921112244";
            break;
        case 2: //Android 18
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/c/c1/Android_18_Artwork.png/revision/latest?cb=20180902173221";
            break;
        case 3: //Android 21
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/6/69/Android_21_Artwork.png/revision/latest?cb=20180902173236";
            break;
        case 4: //Beerus
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/17/Beerus_Artwork.png/revision/latest?cb=20180902173306";
            break;
        case 5: //Captain Ginyu
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/12/Captain_Ginyu_Artwork.png/revision/latest/scale-to-width-down/350?cb=20180914190847";
            break;
        case 6: //Cell
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b4/Cell_Artwork.png/revision/latest?cb=20180914190920";
            break;
        case 7: //Frieza
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/59/Frieza_Artwork.png/revision/latest?cb=20180902173332";
            break;
        case 8: //Gohan (Teen)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/c/c6/Gohan_%28Teen%29_Artwork.png/revision/latest?cb=20180914190755";
            break;
        case 9: //Gohan (Adult)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/ba/Gohan_%28Adult%29_Artwork.png/revision/latest?cb=20180902173350";
            break;
        case 10:    //Goku Super Saiyan
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b1/Goku_%28Super_Saiyan%29_Artwork.png/revision/latest?cb=20180914190656";
            break;
        case 11:    //Goku (SSGSS)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/2/2b/Goku_%28SSGSS%29_Artwork.png/revision/latest/scale-to-width-down/163?cb=20180902173408";
            break;
        case 12:    //Goku Black
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/d/d7/Goku_Black_Artwork.png/revision/latest?cb=20180902173440";
            break;
        case 13:    //Gotenks
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b4/Gotenks_Artwork.png/revision/latest?cb=20180902173502";
            break;
        case 14:    //Hit
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b2/Hit_Artwork.png/revision/latest?cb=20180902173526";
            break;
        case 15:    //Kid Buu
            document.getElementById("c2img").src = "http://dustloop.com/wiki/images/thumb/c/c0/DBFZ_Kid_Buu_Portrait.png/245px-DBFZ_Kid_Buu_Portrait.png";
            break;
        case 16:    //Krillin
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/51/Krillin_Artwork.png/revision/latest?cb=20180902173557";
            break;
        case 17:    //Majin Buu
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/6/62/Majin_Buu_Artwork.png/revision/latest?cb=20180902173633";
            break;
        case 18:    //Nappa
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/7/77/Nappa_Artwork.png/revision/latest?cb=20180914191045";
            break;
        case 19:    //Piccolo
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/e/ec/Piccolo_Artwork.png/revision/latest?cb=20180914190738";
            break;
        case 20:    //Tien
            document.getElementById("cimg").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/c/c8/Tien_Artwork.png/revision/latest?cb=20180902173650";
            break;
        case 21:    //Vegeta (Super Saiyan)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/14/Vegeta_%28Super_Saiyan%29_Artwork.png/revision/latest?cb=20180902173731";
            break;
        case 22:    //Vegeta (SSGSS)
            document.getElementById("c2img").src = "https://www.dustloop.com/wiki/images/thumb/7/7e/DBFZ_SSB_Vegeta_Portrait.png/163px-DBFZ_SSB_Vegeta_Portrait.png";
            break;
        case 23:    //Yamcha
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b6/Yamcha_Artwork.png/revision/latest?cb=20180914191111";
            break;
        case 24:    //Bardock
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/9/97/Bardock_Artwork.png/revision/latest?cb=20180902173253";
            break;
        case 25:    //Broly
            document.getElementById("c2img").src = "http://dustloop.com/wiki/images/thumb/b/ba/DBFZ_Broly_Portrait.png/283px-DBFZ_Broly_Portrait.png";
            break;
        case 26:    //Cooler
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/f/f2/Cooler_Artwork.png/revision/latest?cb=20180914191343";
            break;
        case 27:    //Goku (Base)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/e/ea/Goku_Artwork.png/revision/latest?cb=20180902173423";
            break;
        case 28:    //Vegeta (Base)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/4/4f/Vegeta_Artwork.png/revision/latest?cb=20180902173806";
            break;
        case 29:    //Vegito (SSGSS)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/7/72/Vegito_%28SSGSS%29_Artwork.png/revision/latest?cb=20180902173822";
            break;
        case 30:    //Zamasu (Fused)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/0/03/Zamasu_%28Fused%29_Artwork.png/revision/latest?cb=20180902173842";
            break;
        case 31:    //Broly (DBS) (My fav ;) )
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/f/f1/Broly_%28DBS%29_Artwork.png/revision/latest?cb=20191205173206";
            break;
        case 32:    //Gogeta (SSGSS)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1a/Gogeta_%28SSGSS%29_Artwork.png/revision/latest?cb=20190924154249";
            break;
        case 33:    //Goku (GT)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/3/37/Goku_%28GT%29_Artwork.png/revision/latest?cb=20190322172910";
            break;
        case 34:    //Janemba
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/3/33/Janemba_Artwork.png/revision/latest?cb=20190805175120";
            break;
        case 35:    //Jiren
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1e/Jiren_Artwork.png/revision/latest?cb=20190131101001";
            break;
        case 36:    //Videl
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1d/Videl_Artwork.png/revision/latest?cb=20190131101041";
            break;
        case 37:    //Goku (UI)
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/58/Goku_%28Ultra_Instinct%29_Artwork.png/revision/latest?cb=20200508233232";
            break;
        case 38:    //Kefla
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/5e/Kefla_Artwork.png/revision/latest?cb=20200226051238";
            break;
        case 39:    //Master Roshi
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/0/09/Master_Roshi_Artwork.png/revision/latest?cb=20200919034409";
            break;
        case 40:    //Super Baby 2
            document.getElementById("c2img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/9/93/Super_Baby_2_Render.png/revision/latest/scale-to-width-down/239?cb=20210114000036";
            break;
        default:
            document.getElementById("c2img").src = "http://www.dustloop.com/wiki/images/0/06/DBFZ_Logo.png";
            
    }

    switch(choice3){
        case 0: //Android 16
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1b/Android_16_Artwork.png/revision/latest?cb=20180902173209";
            break;
        case 1: //Android 17
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/a/a8/Android_17_Artwork.png/revision/latest?cb=20180921112244";
            break;
        case 2: //Android 18
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/c/c1/Android_18_Artwork.png/revision/latest?cb=20180902173221";
            break;
        case 3: //Android 21
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/6/69/Android_21_Artwork.png/revision/latest?cb=20180902173236";
            break;
        case 4: //Beerus
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/17/Beerus_Artwork.png/revision/latest?cb=20180902173306";
            break;
        case 5: //Captain Ginyu
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/12/Captain_Ginyu_Artwork.png/revision/latest/scale-to-width-down/350?cb=20180914190847";
            break;
        case 6: //Cell
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b4/Cell_Artwork.png/revision/latest?cb=20180914190920";
            break;
        case 7: //Friez
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/59/Frieza_Artwork.png/revision/latest?cb=20180902173332";
            break;
        case 8: //Gohan (Teen)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/c/c6/Gohan_%28Teen%29_Artwork.png/revision/latest?cb=20180914190755";
            break;
        case 9: //Gohan (Adult)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/ba/Gohan_%28Adult%29_Artwork.png/revision/latest?cb=20180902173350";
            break;
        case 10:    //Goku Super Saiyan
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b1/Goku_%28Super_Saiyan%29_Artwork.png/revision/latest?cb=20180914190656";
            break;
        case 11:    //Goku (SSGSS)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/2/2b/Goku_%28SSGSS%29_Artwork.png/revision/latest/scale-to-width-down/163?cb=20180902173408";
            break;
        case 12:    //Goku Black
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/d/d7/Goku_Black_Artwork.png/revision/latest?cb=20180902173440";
            break;
        case 13:    //Gotenks
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b4/Gotenks_Artwork.png/revision/latest?cb=20180902173502";
            break;
        case 14:    //Hit
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b2/Hit_Artwork.png/revision/latest?cb=20180902173526";
            break;
        case 15:    //Kid Buu
            document.getElementById("c3img").src = "http://dustloop.com/wiki/images/thumb/c/c0/DBFZ_Kid_Buu_Portrait.png/245px-DBFZ_Kid_Buu_Portrait.png";
            break;
        case 16:    //Krillin
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/51/Krillin_Artwork.png/revision/latest?cb=20180902173557";
            break;
        case 17:    //Majin Buu
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/6/62/Majin_Buu_Artwork.png/revision/latest?cb=20180902173633";
            break;
        case 18:    //Nappa
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/7/77/Nappa_Artwork.png/revision/latest?cb=20180914191045";
            break;
        case 19:    //Piccolo
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/e/ec/Piccolo_Artwork.png/revision/latest?cb=20180914190738";
            break;
        case 20:    //Tien
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/c/c8/Tien_Artwork.png/revision/latest?cb=20180902173650";
            break;
        case 21:    //Vegeta (Super Saiyan)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/14/Vegeta_%28Super_Saiyan%29_Artwork.png/revision/latest?cb=20180902173731";
            break;
        case 22:    //Vegeta (SSGSS)
            document.getElementById("c3img").src = "https://www.dustloop.com/wiki/images/thumb/7/7e/DBFZ_SSB_Vegeta_Portrait.png/163px-DBFZ_SSB_Vegeta_Portrait.png";
            break;
        case 23:    //Yamch
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/b/b6/Yamcha_Artwork.png/revision/latest?cb=20180914191111";
            break;
        case 24:    //Bardock
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/9/97/Bardock_Artwork.png/revision/latest?cb=20180902173253";
            break;
        case 25:    //Broly
            document.getElementById("c3img").src = "http://dustloop.com/wiki/images/thumb/b/ba/DBFZ_Broly_Portrait.png/283px-DBFZ_Broly_Portrait.png";
            break;
        case 26:    //Cooler
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/f/f2/Cooler_Artwork.png/revision/latest?cb=20180914191343";
            break;
        case 27:    //Goku (Base3
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/e/ea/Goku_Artwork.png/revision/latest?cb=20180902173423";
            break;
        case 28:    //Vegeta (Base)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/4/4f/Vegeta_Artwork.png/revision/latest?cb=20180902173806";
            break;
        case 29:    //Vegito (SSGSS)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/7/72/Vegito_%28SSGSS%29_Artwork.png/revision/latest?cb=20180902173822";
            break;
        case 30:    //Zamasu (Fused)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/0/03/Zamasu_%28Fused%29_Artwork.png/revision/latest?cb=20180902173842";
            break;
        case 31:    //Broly (DBS) (My fav ;) )
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/f/f1/Broly_%28DBS%29_Artwork.png/revision/latest?cb=20191205173206";
            break;
        case 32:    //Gogeta (SSGSS)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1a/Gogeta_%28SSGSS%29_Artwork.png/revision/latest?cb=20190924154249";
            break;
        case 33:    //Goku (GT)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/3/37/Goku_%28GT%29_Artwork.png/revision/latest?cb=20190322172910";
            break;
        case 34:    //Janemba
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/3/33/Janemba_Artwork.png/revision/latest?cb=20190805175120";
            break;
        case 35:    //Jiren
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1e/Jiren_Artwork.png/revision/latest?cb=20190131101001";
            break;
        case 36:    //Videl
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/1/1d/Videl_Artwork.png/revision/latest?cb=20190131101041";
            break;
        case 37:    //Goku (UI)
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/58/Goku_%28Ultra_Instinct%29_Artwork.png/revision/latest?cb=20200508233232";
            break;
        case 38:    //Kefla
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/5/5e/Kefla_Artwork.png/revision/latest?cb=20200226051238";
            break;
        case 39:    //Master Roshi
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/0/09/Master_Roshi_Artwork.png/revision/latest?cb=20200919034409";
            break;
        case 40:    //Super Baby 2
            document.getElementById("c3img").src = "https://static.wikia.nocookie.net/dragonballfighterz/images/9/93/Super_Baby_2_Render.png/revision/latest/scale-to-width-down/239?cb=20210114000036";
            break;
        default:
            document.getElementById("c3img").src = "http://www.dustloop.com/wiki/images/0/06/DBFZ_Logo.png";
            
    }

}