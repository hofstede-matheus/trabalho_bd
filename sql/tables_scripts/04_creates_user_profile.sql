create table if not exists Perfis (
	id varchar default primary key uuid_generate_v4(),
	id_usuario varchar not null
);
