// for edit contact
let getId = null
//get from api
window.onload = function () {

    $.ajax({
        url: '//api-contact-h8.herokuapp.com/contact', // if localhost use : http://localhost:3000/contact
        type: 'get',
        dataType: 'json',
        success: function (result) {
            if (result.status === 200) {
                let listContact = result.result
                listContact.forEach(contact => {
                    $('.list-contact').append(`
                    <div class="card mb-2">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h5 class="contact-name">${contact.name}</h5>
                                <small>Email : ${contact.email}</small><br>
                                <small>Phone Number : ${contact.phone}</small>
                            </div>
                            <div class="col-md-4 d-flex justify-content-end">
                                    <Button class="btn btn-warning btn-edit" data-toggle="modal" data-target="#addContact" onClick='getContact(${contact.id})'>
                                        <i class="icon-pencil"></i>
                                    </Button>
                                    <Button class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Contact" onClick='deleteContact(${contact.id})'>
                                        <i class="icon-remove"></i>
                                    </Button>
                            </div>
                        </div>
                    </div>
                    </div>
                    `)
                });
            } else {
                $('.list-contact').append(`
                    <h4 align="center">You don't have any contact</h4>
                `)
            }
            // console.log(result)
        }
    })
}

//Bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const refresh = () => {
    location.reload()
}

const deleteContact = contactId => {
    $.ajax({
        url: '//api-contact-h8.herokuapp.com/contact/delete/' + contactId,
        type: 'DELETE'
    })
        .done(success => {
            refresh()
        })
        .fail(err => {
            console.log(err)
        })
}
const addContact = form => {
    $.ajax({
        url: '//api-contact-h8.herokuapp.com/contact/add',
        type: 'POST',
        data: form
    })
        .done(success => {
            refresh()
        })
        .fail(err => {
            console.log(err)
        })
}
const editContact = (form, id) => {
    $.ajax({
        url: '//api-contact-h8.herokuapp.com/contact/edit/' + id,
        type: 'PUT',
        data: form
    })
        .done(success => {
            refresh()
        })
        .fail(err => {
            console.log(err)
        })
}

$('#btn-add').click(event => {
    event.preventDefault()
    const form = $('#formContact').serialize()
    addContact(form)
})

$('#btn-editModal').click(event => {
    event.preventDefault()
    const form = $('#formContact').serialize()
    editContact(form, getId)
})

const clearForm = () => {
    $('#title').html('Add Contact')
    $('#name').val(null)
    $('#email').val(null)
    $('#phone').val(null)
    $('#btn-add').show()
    $('#btn-editModal').hide()
}
$('#btn-modal').click(event => {
    clearForm()
})
const getContact = id => {
    clearForm()
    getId = id
    $.ajax({
        url: '//api-contact-h8.herokuapp.com/contact/' + id, // if localhost use : http://localhost:3000/contact
        type: 'get',
        dataType: 'json',
        success: result => {
            const found = result.result
            if (result.status === 200) {
                $('#title').html('Edit Contact')
                $('#name').val(found.name)
                $('#email').val(found.email)
                $('#phone').val(found.phone)
                $('#btn-add').hide()
                $('#btn-editModal').show()
            }
        }
    })
}
