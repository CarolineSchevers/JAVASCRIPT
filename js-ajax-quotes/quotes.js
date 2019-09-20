const btn = document.getElementById("button");
var getQuote = document.getElementById("quote");
const baseURL = 'https://thatsthespir.it/api';


    var requestImage = new XMLHttpRequest();
    requestImage.open("GET", baseURL , true);
    
    requestImage.onreadystatechange = function refreshQuote() {
        if(this.readyState <= 3) {
            var output = '<div class="loader"></div>'
            console.log('loading')
        };
        if(this.readyState === 4 && this.status == 200){
            var x = JSON.parse(this.responseText);
            var output = "";
                output += 
                '<div class="quoteBox">' +
                '<img src="' +x.photo+ '">' + 
                '<p class="quote-text"><img src="images/quoteL.svg" class="quotemark">' + x.quote + '<img src="images/quoteR.svg" class="quotemark qR"></p>' +
                '<p class="quote-author">' + "~  " + x.author + " ( " + x.total_quotes + " quotes ) </p>" +
                '</div>'
            };
            document.getElementById("quote").innerHTML = output;
        }
    
    requestImage.send();

    btn.addEventListener("click", () => {refreshQuote()});

    function refreshQuote() {
        requestImage.open("GET", baseURL, true);
        requestImage.send();
    }