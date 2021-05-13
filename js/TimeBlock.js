const {v4} = require('uuid');

class TimeBlock {
    
    #mentors_id = [];
    #time_blocks_id = [];

    constructor(user, number_of_time_blocks) {
        this.#mentors_id = user.mentors_id;
        for(let i = 1; i<= number_of_time_blocks; i++) {
            this.#time_blocks_id.push(v4());
        }
    }

    #generateMentorId() {
        const mentor_index = Math.floor(Math.random()*this.#mentors_id.length);
        return `'${this.#mentors_id[mentor_index]}'`;
    }

    
    #generateDateTimeStamp() {
        const date = 1+Math.floor(Math.random()*30);
        const month = 1+Math.floor(Math.random()*12);
        const year = 2000 + Math.floor(1+Math.random()*25);
        return `'${month}-${date}-${year}'`; 
    }

    generateInserts() {
        let stmt = "INSERT INTO bloco_tempo (id, id_mentor, inicio, fim) values ";
        this.#time_blocks_id.forEach((time_block_id, i) => {
                stmt += `('${time_block_id}', ${this.#generateMentorId()}, ${this.#generateDateTimeStamp()}, ${this.#generateDateTimeStamp()})`
                if (i==this.#time_blocks_id.length-1) 
                    stmt+=';\n';
                else 
                    stmt+=',\n';
            }
        ) 
        return stmt;
    }

    get mentorsId() {
        return this.#mentors_id;
    }

    get timeBlockIds() {
        return this.#time_blocks_id;
    }
}

module.exports = TimeBlock;