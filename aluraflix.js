

var listaFilmes = ["https://i.ytimg.com/vi/WwW1nqV3pI0/movieposter_en.jpg", "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg", "https://static.wikia.nocookie.net/velozes-e-furiosos/images/a/aa/Velozes_e_Furiosos_-_Capa.jpg/revision/latest/top-crop/width/360/height/450?cb=20180305235641&path-prefix=pt-br"]


for (var i = 0; i < listaFilmes.length; i++) {

    document.write("<img src=" + listaFilmes[i] + ">");
}
