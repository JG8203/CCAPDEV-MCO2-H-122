function getCookie(name) {
    let cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookiePair = cookieArray[i].split('=');
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function redirectToProfileEditPage() {
    const username = getCookie('username');
    let profilePage = 'edit-profile-default.html'; // Default redirection

    if (username) {
        switch (username) {
            case 'StrayWhispererJosh':
                profilePage = 'edit-profile-gilo.html';
                break;
            case 'SammiePaws':
                profilePage = 'edit-profile-sam.html';
                break;
            case 'PeterParkerTheCatGuy':
                profilePage = 'edit-profile-peter.html';
                break;
            case 'AudreyHeartsCats':
                profilePage = 'edit-profile-audrey.html';
                break;
            case 'AdminCatto':
                profilePage = 'edit-profile-admin.html';
                break;
        }
    }

    // Redirect to the determined profile page
    window.location.href = profilePage;
}

document.addEventListener('DOMContentLoaded', function() {
    var profileLink = document.getElementById('profileLink');
    if (profileLink) {
        profileLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default anchor behavior
            redirectToProfileEditPage();
        });
    }
});
