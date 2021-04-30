create table if not exists bloco_Tempo (
	id varchar not null primary key default uuid_generate_v4(),
	id_mentor varchar not null,
	inicio timestamp not null,
	fim timestamp not null
);