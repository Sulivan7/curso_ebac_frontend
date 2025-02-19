// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('search-button').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest();
//         const searchValue = document.getElementById('search').value;
//         const endpoint = `https://api.github.com/users/${searchValue}`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();
//     });
// });

//         $.ajax(endpoint).done(function(resposta) {
//             $('#profile-avatar').attr('src', resposta.avatar_url);
//             $('#profile-name').text(resposta.name || "Nome não disponível");
//             $('#profile-username').text("@" + resposta.login);
//             $('#repos').text(resposta.public_repos);
//             $('#followers').text(resposta.followers);
//             $('#following').text(resposta.following);
//             $('#profile-link').attr('href', resposta.html_url);
//         });
//     });

$(document).ready(function() {
    $('#search-button').click(function() {
        const searchValue = $('#search').val();
        const endpoint = `https://api.github.com/users/${searchValue}`;

        if (searchValue === '') {
            alert('digite um nome de usuário.');
            return;
        }

    fetch(endpoint)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        $('#profile-avatar').attr('src', json.avatar_url);
        $('#profile-name').text(json.name || "Nome não disponível");
        $('#profile-username').text("@" + json.login);
        $('#repos').text(json.public_repos);
        $('#followers').text(json.followers);
        $('#following').text(json.following);
        $('#profile-link').attr('href', json.html_url);
    })
    .catch(function(error) {
        alert('Ocorreu um erro');
        });
    });
});
