window.onscroll =
// When the user scrolls down 600px from the top of the document, show the button
//Place it with css
function scrollBtn() {
  //600 px is too long for a mobile,
  //I should try linking it to a section so it appears always in the same place.
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById('goUpBtn').style.display = 'block';
  } else {
    document.getElementById('goUpBtn').style.display = 'none';
  }
};
// When the user clicks on the button, scroll to the top of the document
function goUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

function send() {
  let mailTo = "hippitaku@gmail.com";
  let subject = "I checked your portfolio";
  let name = document.getElementById("clientName").value;
  let body = document.getElementById("message").value;
  window.open(`mailto:${mailTo}?subject=${subject}&body=Hi, my name is ${name}, ${body}`);
  }
  document.getElementById("sendBtn").addEventListener("click", send);
