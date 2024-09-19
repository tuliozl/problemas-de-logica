SELECT 
	s.name AS estado,
	s.acronym AS uf,
	c.company_name AS razao_social,
	p.number AS telefone,
	pt.name AS tipo_telefone
FROM 
	customer c
JOIN state s ON s.id = c.pk_state 
LEFT JOIN phone p ON c.id = p.fk_customer 
JOIN phone_type pt ON pt.id = p.fk_type 

WHERE s.acronym = 'SP';

	
