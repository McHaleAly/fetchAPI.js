window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

// TODO: Modify to use Fetch API
function fetchQuotes(topic, count) {
   const endpoint= "https://wp.zybooks.com/quotes.php"
   const queryString = "topic = ${topic}&count=${count}"
   const url = '${endpoint}?${queryString}'

   fetch(url)  
   .then(response => response.json())
   .then(quotes => {
      const quotesDiv = document.querySelector("#quotes")
      if (quotes.error){
         quotesDiv.innerHtml = quotes.error
      } 
      else {
         let html ="<ol>"
         for (let quoteItem of quote){
            html += "<li>${quoteItem.quote} - ${quoteItem.source}</li>"
         }
         html += "</ol>"

         quotesDiv.innerHTML = html
      {
         
      })

}
   





   
