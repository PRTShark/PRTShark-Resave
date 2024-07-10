<script>
    document.getElementById('submit-comment').addEventListener('click', function() {
        var commentInput = document.getElementById('comment-input');
        var commentText = commentInput.value.trim();
        if (commentText !== "") {
            addComment(commentText);
            commentInput.value = "";
        }
    });

    function addComment(text) {
        var commentsContainer = document.getElementById('comments-container');
        var comment = document.createElement('div');
        comment.classList.add('comment');

        var commentContent = document.createElement('p');
        commentContent.textContent = text;

        var editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.textContent = '编辑';
        editButton.addEventListener('click', function() {
            editComment(commentContent);
        });

        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = '删除';
        deleteButton.addEventListener('click', function() {
            deleteComment(comment);
        });

        comment.appendChild(commentContent);
        comment.appendChild(editButton);
        comment.appendChild(deleteButton);
        commentsContainer.appendChild(comment);
    }

    function editComment(commentContent) {
        var newText = prompt("编辑留言:", commentContent.textContent);
        if (newText !== null && newText.trim() !== "") {
            commentContent.textContent = newText.trim();
        }
    }

    function deleteComment(comment) {
        if (confirm("确定要删除这条留言吗?")) {
            comment.remove();
        }
    }
</script>
