const db = require('./db-config'); 

module.exports = {
    find, 
    findById
}

// _resolves to an array of users_
function find() {
    return db('schemes'); 
}

// _resolves to an array containing a single user (or null if id is invalid)_
function findById(id) {
    return db('schemes').where({ id }).first();  
}

//resolves to an array of all correctly ordered steps for the given scheme 
function findSteps(id) {
    return db('steps')
        .join('schemes', "steps.id", "schemes.id")
        .select("scheme_name")
}

//resolves to a newly inserted scheme, including an id 
function add(scheme) {
    return db('schemes').insert(scheme); 
}

// resolves to newly updated scheme object
function update(changes, id) {
    return db('schemes').where({ id }).update(changes); 
}

// resolves to the removed scheme, or null if the id is invalid
function remove(id) {
    return db('schemes').where({ id }).del(); 
}