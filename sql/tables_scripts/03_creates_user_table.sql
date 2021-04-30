create table if not exists Usuarios (
	id varchar primary key default uuid_generate_v4(),
	tipo tipo_perfil,
	email varchar not null,
	senha varchar not null,
	nome varchar(255) not null,
	nascimento timestamp not null
);