window.addEventListener('load', function() {
    fetch(window.location.href)
    .then(response => {
        if (!response.ok) {
            // Redirect to custom 404 page if the response is not ok (404 or other errors)
            window.location.href = '/website-v3/404.html';
        }
    })
    .catch(() => {
        // In case of a network error or other issues, also redirect to 404
        window.location.href = '/website-v3/404.html';
    });
});