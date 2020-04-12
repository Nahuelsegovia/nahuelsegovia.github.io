let linksInternos = document.links;
let guardarLinks = [];
let linkPagina = location.host;
for(let link of linksInternos){
	if(link.href.includes(linkPagina)){
		guardarLinks.push(link);
	}
}

guardarLinks = guardarLinks.join(' , ');
console.log(guardarLinks)
