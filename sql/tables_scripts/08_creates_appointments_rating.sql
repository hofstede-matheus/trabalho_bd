create table if not exists avaliacao (
	id varchar primary key default uuid_generate_v4(), 
	id_agendamento varchar not null, 
	numero_Estrelas int not null
);