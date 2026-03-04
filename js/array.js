function array() {
    Array.from(document.querySelectorAll('ol')).forEach(ol => {
        var educationList = Array.from(ol.children).map(li => li.textContent).filter(text => text.trim() !== '\n');
        console.log(educationList);

        for (let i = 0; i < educationList.length; i++) {
            let text = educationList[i];
            if (text.includes("Bachelor's")) {
                console.log(text);
            }
            if (text.includes("2024")) {
                console.log(text);
            }
            const primeleCuvinte = text.match(/\S+/)[0];
            console.log(primeleCuvinte);
            var aniiStudiu = text.match(/\d{4}/g);
            if (aniiStudiu) {
                console.log(aniiStudiu);
            }
            var durataStudii=0, durataAuxiliara;
            if (aniiStudiu[0]>aniiStudiu[1]) {
                durataAuxiliara = aniiStudiu[0] - aniiStudiu[1];
            }
            else {
                durataAuxiliara = aniiStudiu[1] - aniiStudiu[0];
            }
            if (durataAuxiliara > durataStudii) {
                durataStudii = durataAuxiliara;
            }
            console.log("Total ani de studiu: " + durataStudii);
        }
    });
}