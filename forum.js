// Toggle visibility utility
function toggleVisibility(element, shouldShow) {
    element.style.display = shouldShow ? 'block' : 'none';
}

// Submit Comment
function submitComment() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();
    if (commentText) {
        addComment(commentText);
        commentInput.value = ''; // Clear the input
    }
}

// Add Comment to the Display
function addComment(text) {
    const commentsDisplay = document.getElementById("comments-display");
    
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("body");

    const authorsDiv = document.createElement("div");
    authorsDiv.classList.add("authors");
    authorsDiv.innerHTML = `
        <div class="username"><a href="#">You</a></div>
        <div>Agricultural Expert</div>
        <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="User Avatar">
        <div>Posts: <u>57</u></div>
        <div>Points: <u>6450</u></div>
    `;

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    contentDiv.innerHTML = `
        ${text}<br>
        <button onclick="showReply(this)" class="reply-btn">Reply</button>
        <div class="reply-container hide" style="display: none;"></div>
    `;

    commentDiv.appendChild(authorsDiv);
    commentDiv.appendChild(contentDiv);
    commentsDisplay.appendChild(commentDiv);
}

// Show Reply Area
function showReply(button) {
    const replyContainer = button.nextElementSibling;

    if (replyContainer.style.display === 'none' || replyContainer.style.display === '') {
        replyContainer.innerHTML = `
            <div class="reply-area">
                <textarea placeholder="Reply here ..."></textarea>
                <input type="button" value="Submit" onclick="submitReply(this)">
            </div>
        `;
        replyContainer.style.display = 'block';
    } else {
        replyContainer.style.display = 'none';
    }
}

// Submit Reply
function submitReply(button) {
    const replyArea = button.parentElement.querySelector("textarea");
    const replyText = replyArea.value.trim();
    if (replyText) {
        addReply(replyText, button);
        replyArea.value = ''; // Clear the input
    }
}

// Add Reply to Comment
function addReply(text, button) {
    const replyContainer = button.closest(".reply-container");
    const replyDiv = document.createElement("div");
    replyDiv.classList.add("body");

    const replyContentDiv = document.createElement("div");
    replyContentDiv.classList.add("content");
    replyContentDiv.innerHTML = `<div>J.Philip replied: ${text}</div>`;

    replyDiv.appendChild(replyContentDiv);
    replyContainer.appendChild(replyDiv);
}

// Filter Comments
function filterComments() {
    const input = document.getElementById("comments-search-input").value.toLowerCase();
    const comments = document.querySelectorAll("#comments-display .body");

    comments.forEach(comment => {
        const commentText = comment.querySelector(".content").innerText.toLowerCase();
        comment.style.display = commentText.includes(input) ? "" : "none";
    });
}


