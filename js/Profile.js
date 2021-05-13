const {v4} = require('uuid');

class Profile {
    #users_id = [];
    #id = []
    constructor(users) {   
        users.mentors_id.forEach(mentor_id => this.#users_id.push(mentor_id));
        users.mentees_id.forEach(mentee_id => this.#users_id.push(mentee_id));
        this.#users_id.forEach(() => {
            this.#id.push(v4());
        })
    }
    
    generateInserts() {
        let stmt = "INSERT INTO perfis(id, id_usuario) values ";
        this.#id.forEach((id, index) => {
            stmt+=`('${id}', '${this.#users_id[index]}')`;
            if(index === this.#id.length -1) 
                stmt+=';';
            else
                stmt+=',\n';
        })
        return stmt;
    }

    get id() {
        return this.#id;
    }
}

module.exports = Profile;