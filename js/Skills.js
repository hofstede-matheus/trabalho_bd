const {v4} = require('uuid');

class Skills {
    #profiles_id = [];
    #id = [];
    #skills_name = ['futebol', 'java', 'javascript', 'c', 'c++', 'dança', 'comunicacao', 'videogame'];
    constructor(profiles) {   
        profiles.id.forEach(id => this.#profiles_id.push(id));
        this.#profiles_id.forEach(() => {
            this.#id.push(v4());
        })
    }

    #generateSkillName() {
        const skill_name_index = Math.floor(Math.random()* this.#skills_name.length);
        return `'${this.#skills_name[skill_name_index]}'`;
    }

    generateInserts() {
        let stmt = "INSERT INTO habilidades(id, id_perfil, nome) values ";
        this.#id.forEach((id, index) => {
            stmt+=`('${id}', '${this.#profiles_id[index]}', ${this.#generateSkillName()})`;
            if(index === this.#id.length - 1) 
                stmt+=';';
            else
                stmt+=',\n';
        })
        return stmt;
    }
}

module.exports = Skills;