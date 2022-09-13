CREATE TABLE location (
  id INT NOT NULL AUTO_INCREMENT,
  country VARCHAR(254) NOT NULL,
  province_or_state VARCHAR(254) NOT NULL,
  longitude VARCHAR(100) NULL,
  latitude VARCHAR(100) NULL,
  PRIMARY KEY (id)
);
  