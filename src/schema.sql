-- create a posts table with id, slug, title, author, date, subtitle, summary, tag, cover, content, length. slug is unique and primary key
-- CREATE TABLE posts (
--   id SERIAL PRIMARY KEY,
--   slug VARCHAR(255) UNIQUE NOT NULL,
--   title VARCHAR(255) NOT NULL,
--   author VARCHAR(255) NOT NULL,
--   date DATE NOT NULL,
--   subtitle VARCHAR(255) NOT NULL,
--   summary TEXT NOT NULL,
--   tag VARCHAR(255) NOT NULL,
--   cover VARCHAR(255) NOT NULL,
--   content TEXT NOT NULL,
--   length INT NOT NULL
-- );

-- add a few posts to the table
INSERT INTO posts (slug, title, author, date, subtitle, summary, tag, cover, content, length) VALUES (
  'first-post', --slug
  'This is My First Post', --title
  'John Doe', --author
  '2024-03-04', --date
  'yes, my first post', --subtitle
  'This is the first post summary', --summary
  'web, post, blog', --tag
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png', --cover
  '<h3>this is a happy story ... </h3> <p>We all starting from here</p><p>We all starting from here</p><p>We all starting from here</p><p>We all starting from here</p>', --content
  2 --length
  );
