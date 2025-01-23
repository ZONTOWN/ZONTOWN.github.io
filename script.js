document.getElementById('submit').addEventListener('click', function() {
    
    let message = document.getElementById('message').value; 
    if (message) {
        displayMessage(message); // 调用显示留言的函数
        document.getElementById('message').value = ''; 
    } else {
        alert('Please enter a message!'); 
    }
});


function displayMessage(message) {
    let messagesDiv = document.getElementById('messages');
    let newMessage = document.createElement('div'); 
    newMessage.textContent = message; 
    messagesDiv.appendChild(newMessage);


    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message); 
    localStorage.setItem('messages', JSON.stringify(messages)); 
}


window.onload = function() {
    let messages = JSON.parse(localStorage.getItem('messages')) || []; 
    messages.forEach(displayMessage);
};
