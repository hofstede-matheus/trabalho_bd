create table if not exists habilidades (
	id varchar primary key default uuid_generate_v4(),
	id_perfil  varchar not null,
	nome varchar not null
);
