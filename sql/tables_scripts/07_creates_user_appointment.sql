create table if not exists agendamento (
	id varchar primary key default uuid_generate_v4(), 
	id_mentor varchar not null, 
	id_mentorado varchar not null, 
	id_Bloco_Tempo varchar, 
	concluido boolean default false
);
