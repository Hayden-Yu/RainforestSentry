CREATE KEYSPACE IF NOT EXISTS "sentry" WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };
USE "sentry";
CREATE TABLE IF NOT EXISTS listing (
  product_code text,
  product_name text,
  price decimal,
  range map<text, decimal>,
  on_deal boolean,
  ts timestamp,
  PRIMARY KEY (product_code, ts)
);
CREATE TABLE IF NOT EXISTS subscription (
  contact text,
  product_code text,
  hour int,
  day_of_month int,
  month int,
  day_of_week int,
  is_active boolean,
  ts timestamp,
  PRIMARY KEY (contact, product_code, hour, day_of_month, month, day_of_week)
);
