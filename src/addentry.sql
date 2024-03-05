INSERT INTO posts (id, slug, title, author, date, subtitle, summary, tag, cover, content, length) VALUES (
    3,
  'third-post',
  'This is My Third Post. It is a Very Long Title Post with a Lot of Words',
  'John Doe',
  '2024-03-05',
  'yes, my third post with very very long subtitle too', 
  'This is the third post summary. It should be extremely long to test the length of the post summary. This is the third post summary. It should be extremely long to test the length of the. It should contains about 50-100 words.',
  'web, post, blog, svelte, more, long post, long title, long subtitle, long summary, long content, long length',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png',
  '<h3>First Chapter</h3> 
  <p>We all starting from here, giving it a very <b>long</b> paragraph to start, and see if it is working or not. I guess it should work as expected.</p>
  <p>We all starting from here</p>
  <figure>
    <img src="https://images.freeimages.com/images/large-previews/fe0/architecture-1216049.jpg" alt="architecture">
    <figcaption>Fig. 1: Architecture</figcaption>
  </figure>
  <p>We all starting from here, giving it a very long <a class="link" href="/blog/first-post">paragraph</a> to start, and see if it is working or not. I guess it should work as expected.</p>
  <h3>Second Chapter</h3>
  <blockquote>
    <p>“The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.”</p>
    <footer>Steve Jobs</footer>
  </blockquote>
  <p>We all starting from here, giving it a very long paragraph to start, and see if it is working or not. I guess it should work as expected.</p>
  <pre>
<code>
console.log("Hello World");
console.log("Hello World");
console.log("This is a very long code block, and it should be working as expected, and it should be very long to test the length of the code block.");
</code>
  </pre>
  <ul>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item is very long, and very very long, I guess it should reach to the second line of this item</li>
    <li>Fourth Item</li>
    <li>Fifth Item</li>
    <li>Sixth Item</li>
    <li>Seventh Item</li>
    <li>Eighth Item</li>
  </ul>
  <p>We all starting from here, giving it a very long paragraph to start, and see if it is working or not. I guess it should work as expected.</p>'
  ,
  5
  );