   const text = "We make it easy for you."; // Text to type
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function typeText() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 40); // Adjust speed (in milliseconds)
      }
    }

    // Start the typing animation
    typeText();
  












  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );
  




  $( function() {
    $( "#accordion2" ).accordion({
      collapsible: true
    });
  } );
  




  $( function() {
    $( "#accordion3" ).accordion({
      collapsible: true
    });
  } );
  




  $(document).ready(function () {
      $("#faq").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false // Start with all questions collapsed
      });
    });