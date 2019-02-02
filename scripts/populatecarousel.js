// creates the carousel, carousel-items and everything in them

function addElement() {
    let data = songData;
    let array = arrayData;
    for (let i = 0; i < data.length; i++){
		// creates the carousel items
		let item = document.createElement("div");
		item.setAttribute("class", "carousel-item");
		let center = document.createElement("div");
        center.setAttribute("class", "center");
        
        // creates the song title text
        let text = document.createElement("h2");
        let content = document.createTextNode(data[i][0]);
        text.appendChild(content);
        center.appendChild(text);
        
        // creates links for the websites in songData.js
        for (let j = 1; j < data[i].length; j++) {
            let paragraph = document.createElement("p");
            let link = document.createElement("a");
            link.setAttribute("href", data[i][j]);
            link.innerHTML = array[j];
            paragraph.appendChild(link);
            center.appendChild(paragraph);
        }
        
    	item.appendChild(center);
		document.getElementById("carousel").appendChild(item);
		
	}
	
}
addElement();