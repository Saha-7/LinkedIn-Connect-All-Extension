console.log('LinkedIn Connect Extension: Content script started');


if (window.location.href.includes('linkedin.com/mynetwork/grow')) {
  console.log('LinkedIn Grow Network page detected');

  
  const container = document.createElement('div');
  container.id = 'linkedin-extension-root';
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '20px';
  container.style.transform = 'translateY(-50%)';
  container.style.backgroundColor = 'red';
  container.style.color = 'white';
  container.style.padding = '10px 20px';
  container.style.borderRadius = '5px';
  container.style.cursor = 'pointer';
  container.style.zIndex = '10000';
  container.innerText = 'Connect with All';

  try {
    document.body.appendChild(container);
    console.log('Button appended to the DOM');
  } catch (error) {
    console.error('Error appending the button:', error);
  }

  
  container.addEventListener('click', () => {
    console.log('Connect with All button clicked');

    const connectButtons = document.querySelectorAll('button');
    let count = 0;

    connectButtons.forEach((button) => {
      if (button.innerText.trim() === 'Connect') {
        setTimeout(() => {
          button.click();
          console.log(`Clicked Connect button: ${button}`);
        }, count * 2000); // 2-second delay
        count++;
      }
    });

    if (count === 0) {
      alert('No connectable profiles found.');
    } else {
      alert(`${count} connection requests sent.`);
    }
  });
} else {
  console.log('Not on LinkedIn Grow Network page. No action taken.');
}
