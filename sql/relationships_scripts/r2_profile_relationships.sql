
alter table perfis 
add constraint fk_usuarios foreign key(id_usuario)
references usuarios(id);

