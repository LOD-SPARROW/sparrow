// Add event listener to all share buttons
  document.querySelectorAll('.share-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      var social = this.getAttribute('data-social');
      var url = window.location.href; // You can replace this with the URL you want to share

      switch(social) {
        case 'facebook':
          window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
          break;
        case 'twitter':
          window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url), '_blank');
          break;
        case 'whatsapp':
          window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(url), '_blank');
          break;
        default:
          console.error('Unsupported social platform');
      }
    });
  });

  // Copy to clipboard button functionality
  document.getElementById('copy-btn').addEventListener('click', function() { 
    var url = window.location.href;
    var dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  });





  // Get the button
        var mybutton = document.getElementById("topButton");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        mybutton.onclick = function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };




    // share buttons
  function share(platform) {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(document.title);
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                break;
            case 'pinterest':
                shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`;
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
                break;
        }

        window.open(shareUrl, '_blank');
    }
    
    
     // Table of Contents
     
     function toggleToc() {
            var content = document.getElementById("toc-content");
            content.style.display = content.style.display === "block" ? "none" : "block";
        }
        
        
    
     //FAQs section
    document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', event => {
                const current = document.querySelector('.faq-question:not(.collapsed)');
                if (current && current !== item) {
                    current.classList.add('collapsed');
                    current.nextElementSibling.style.display = 'none';
                }
                item.classList.toggle('collapsed');
                const answer = item.nextElementSibling;
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        });
  