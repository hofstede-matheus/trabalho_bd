const {v4} = require('uuid');

class Evaluation {
    #id = [];
    #id_agendamento = [];
    
    constructor(agendamento) {
        agendamento.ids.forEach(id => {
            this.#id.push(v4());
            this.#id_agendamento.push(id);
        });
    }

    #generateEvaluation() {
        const MAX_EVALUATION = 5;
        return Math.floor(Math.random()*MAX_EVALUATION);
    }

    generateInserts() {
        let stmt = 'INSERT INTO avaliacao (id, id_agendamento, numero_estrelas) VALUES '
        for(let i = 0; i < this.#id.length ; i++) {
            stmt+=`('${this.#id[i]}', '${this.#id_agendamento[i]}', ${this.#generateEvaluation()})`
            if(i=== this.#id.length-1) 
                stmt+=';';
            else
                stmt+=',';
        }
        return stmt;
    }
}

module.exports = Evaluation;