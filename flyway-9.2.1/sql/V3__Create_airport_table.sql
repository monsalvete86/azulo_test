CREATE TABLE airport (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(254) NOT NULL,
  airport_operator_id INT NULL,
  airport_code VARCHAR(45) NOT NULL,
  location_id INT NULL,
  priority_order INT NOT NULL,
  PRIMARY KEY (id),
  INDEX Fk_operator_idx (airport_operator_id ASC) VISIBLE,
  CONSTRAINT Fk_operator
    FOREIGN KEY (airport_operator_id)
    REFERENCES azulo_test.airport_operator (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT Fk_location
    FOREIGN KEY (id)
    REFERENCES azulo_test.location (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);