$(document).ready(function(){
    
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

$img.css('display', 'none'); // on cache les images
$currentImg.css('display', 'block'); // on affiche seulement l'image courante

$('.next').click(function(){ // image suivante
    if(i < indexImg){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
        
    }
    else{ // sinon, on le remet à 0 (première image), permet le défilement infini
        i = 0;
    }
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
});

$('.prev').click(function(){ // image précédente
    if(i > 0){ // si le compteur est supérieur à l'index de départ
            i--; // on décremente
            
        }
        else{ // sinon, on le remet à index maximum (dernière image), permet le défilement infini
            i = indexImg;
        }
            $img.css('display', 'none'); // on cache les images
            $currentImg = $img.eq(i); // on définit la nouvelle image
            $currentImg.css('display', 'block'); // puis on l'affiche





});

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
        // console.log('i= ' + i);
						
        if(i < indexImg){ // si le compteur est inférieur au dernier index
	    i++; // on l'incrémente
        
	}
	else{ // sinon, on le remet à 0 (première image)
	    i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 2000); // on définit l'intervalle à 2000 millisecondes (2s)
}

slideImg(); // enfin, on lance la fonction une première fois

});
