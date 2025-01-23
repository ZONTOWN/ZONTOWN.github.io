// 获取 HTML 元素
const submitButton = document.getElementById('submit');
const messageInput = document.getElementById('message');
const messagesDiv = document.getElementById('messages');

// 存储留言的数据结构
let messages = [];
let messageIdCounter = 0;

// 添加点击事件处理器
submitButton.addEventListener('click', function() {
    const message = messageInput.value;
    if (message) {
        const messageId = ++messageIdCounter;
        const newMessage = {
            id: messageId,
            content: message,
            replies: []
        };
        messages.push(newMessage);
        displayMessage(newMessage);
        messageInput.value = ''; // 清空输入框
    } else {
        alert('Please enter a message!'); // 如果输入为空,给出提示
    }
});

// 显示留言的函数
function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `
        <p><strong>Leave a message:</strong> ${message.content}</p>
        <div class="replies"></div>
        <button onclick="replyToMessage(${message.id})">reply</button>
    `;
    messagesDiv.appendChild(messageElement);

    // 显示回复
    message.replies.forEach(reply => {
        const replyElement = document.createElement('div');
        replyElement.className = 'reply';
        replyElement.innerHTML = `<p><strong>reply:</strong> ${reply.content}</p>`;
        messageElement.querySelector('.replies').appendChild(replyElement);
    });
}

// 回复留言的函数
window.replyToMessage = function(messageId) {
    const replyInput = prompt('Enter your response:');
    if (replyInput) {
        const reply = {
            content: replyInput
        };
        const message = messages.find(msg => msg.id === messageId);
        if (message) {
            message.replies.push(reply);
            const messageElement = document.querySelector(`.message[data-id="${messageId}"]`);
            const repliesDiv = messageElement.querySelector('.replies');
            const replyElement = document.createElement('div');
            replyElement.className = 'reply';
            replyElement.innerHTML = `<p><strong>回复:</strong> ${reply.content}</p>`;
            repliesDiv.appendChild(replyElement);
        }
    }
}
