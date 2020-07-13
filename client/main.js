
$(document).ready(function(){
    if (localStorage.access_token) {
        homeAfterLogin()
        showPassword()
    } else {
        homeBeforeLogin()
    }
})


function homeBeforeLogin() {
    $(`#addButton`).hide()
    $(`#logoutButton`).hide()
    $(`#loginForm`).show()
    $(`#addForm`).hide()
    $(`#dataPage`).hide()
    $(`#alertLogin`).empty()
    $(`#emailLogin`).val(``)
    $(`#passwordLogin`).val(``)
}

function homeAfterLogin() {
    $(`#addButton`).show()
    $(`#logoutButton`).show()
    $(`#loginForm`).hide()
    $(`#addForm`).hide()
    $(`#dataPage`).show()
    $(`#alertPassword`).empty()
}

function logout() {
    localStorage.clear()
    homeBeforeLogin()
}

function addForm() {
    $(`#alertAdd`).empty()
    $(`#addForm`).show()
    $(`#dataPage`).hide()
    $(`#addName`).val(``)
    $(`#addUrl`).val(``)
    $(`#addedPassword`).val(``)
    $(`#addUsername`).val(``)
}

function loginProcess(event) {
    event.preventDefault()
    $(`#alertLogin`).empty()
    let email = $(`#emailLogin`).val()
    let password = $(`#passwordLogin`).val()

    $.ajax({
        method: `POST`,
        url: `http://localhost:3000/login`,
        data: {
            email, password
        }
    })
    .done(data => {
        localStorage.access_token = data.access_token
        homeAfterLogin()
        showPassword()
    })
    .fail(err => {
        console.log(err)
        $(`#alertLogin`).append(`
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>${err.responseJSON.message}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `)
    })
    .always(() => {
        $(`#emailLogin`).val(``)
        $(`#passwordLogin`).val(``)
    })
}

function showPassword() {
    $(`#passwordEmpty`).hide()
    $(`#passwordPage`).empty()
    $.ajax({
        method: `GET`,
        url: `http://localhost:3000/passwords/`,
        headers: {
            access_token: localStorage.access_token
        }
    })
    .done(data => {
        // console.log(data)
        if (data.length === 0) {
            $(`#passwordEmpty`).show()
        } else {
            data.forEach(element => {
                $(`#passwordPage`).append(`
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">${element.url}</p>
                            <p class="card-text">username/email: ${element.username}</p>
                            <p class="card-text">password: ${element.password}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group mx-auto">
                                    <button type="button" class="btn btn-sm btn-outline-danger" onclick="deletePassword(${element.id})">Delete Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `)
            });
        }
    })
    .fail(err => {
        console.log(err)
    })
    .always(() => {

    })
}

function addPassword(event) {
    event.preventDefault()
    $(`#alertPassword`).empty()
    $(`#alertAdd`).empty()
    let name = $(`#addName`).val()
    let url = $(`#addUrl`).val()
    let password = $(`#addedPassword`).val()
    let username = $(`#addUsername`).val()
    $.ajax({
        method: `POST`,
        url: `http://localhost:3000/passwords/`,
        headers: {
            access_token: localStorage.access_token
        },
        data: {
            name, url, password, username
        }
    })
    .done(data => {
        // console.log(data)
        homeAfterLogin()
        showPassword()
        $(`#alertPassword`).append(`
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Successfully add new Password!</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `)
    })
    .fail(err => {
        err.responseJSON.message.forEach(element => {
            $(`#alertAdd`).append(`
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>${element}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `)
        });
    })  
    .always(() => {
        $(`#addName`).val(``)
        $(`#addUrl`).val(``)
        $(`#addedPassword`).val(``)
        $(`#addUsername`).val(``)
    })
}

function deletePassword(params) {
    let id = params
    $(`#alertPassword`).empty()
    $.ajax({
        method: `DELETE`,
        url: `http://localhost:3000/passwords/${id}`,
        headers: {
            access_token: localStorage.access_token
        }
    })
    .done(data => {
        // console.log(data)
        showPassword()
        $(`#alertPassword`).append(`
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>${data.message}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `)
    })
    .fail(err => {
        console.log(err)
    })
    .always(() => {

    })
}