function detectOS() {
    const userAgent = window.navigator.userAgent;
    
    if (userAgent.includes("Windows")) {
      return "Windows";
    } else if (userAgent.includes("Mac")) {
      return "MacOS";
    } else if (userAgent.includes("Linux")) {
      return "Linux";
    } else {
      return "Unknown";
    }
  }
  
  function sendOSToBackend() {
    const os = detectOS();
    
    // Assuming you're using fetch API for sending POST request
    fetch('backend-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ os: os }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Response from backend:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
  
  // Call the function when needed
  sendOSToBackend();
  