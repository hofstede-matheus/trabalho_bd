const {v4} = require('uuid');
/** Gera  o Mock data de agendamentos */

class Appointments {
    #ids = [];
    #mentors_id = [];
    #mentees_id = [];
    #time_blocks_id = [];

    constructor(users, timeblocks, number_of_appointments) {
        for(let i = 0; i< number_of_appointments; i++) {
            this.#ids.push(v4());
        }
        users.mentors_id.forEach(mentor_id => this.#mentors_id.push(mentor_id));
        users.mentees_id.forEach(mentee_id => this.#mentees_id.push(mentee_id));
        timeblocks.timeBlockIds.forEach(timeBlockId => this.#time_blocks_id.push(timeBlockId));
    }

    #generateTimeBlockId()  {
        const time_block_index = Math.floor(this.#time_blocks_id.length*Math.random());
        return `'${this.#time_blocks_id[time_block_index]}'`
    }

    #generateStatus() {
        const status = [true, false];
        const status_index = Math.floor(Math.random()*status.length);
        return status[status_index];
    }

    #generateMenteesId() {
        const mentee_index = Math.floor(Math.random()*this.#mentees_id.length);
        return `'${this.#mentees_id[mentee_index]}'`;
    }

    #generateMentorsId() {
        const mentors_index = Math.floor(Math.random()*this.#mentors_id.length);
        return `'${this.#mentors_id[mentors_index]}'`;
    }

    generateInserts()  {
        let stmt = "INSERT INTO agendamento (id, id_mentor, id_mentorado, id_bloco_tempo, concluido) VALUES ";
        this.#ids.forEach((id, index) => {
            stmt+= `('${id}', ${this.#generateMentorsId()}, ${this.#generateMenteesId()}, ${this.#generateTimeBlockId()}, ${this.#generateStatus()})`
            if(index === this.#ids.length - 1)
                stmt+=';';
            else    
                stmt+=',';
        });
        return stmt;
    }

    get ids() {
        return this.#ids;
    }
}

module.exports = Appointments;
