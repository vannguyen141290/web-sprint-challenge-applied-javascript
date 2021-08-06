const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>

  //instantiate elements
  const header = document.createElement('div');
  const span1 = document.createElement('span');
  const h1 = document.createElement('h1');
  const span2 = document.createElement('span');
  
  //className, text, attributes
  header.classList.add('header');
  span1.classList.add('date');
  span1.textContent = date;
  h1.textContent = title;
  span2.classList.add('temp');
  span2.textContent = temp;

  //hierarchy
  header.appendChild(span1);
  header.appendChild(h1);
  header.appendChild(span2);

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let select = document.querySelector(selector);
  select.appendChild(Header());
}

export { Header, headerAppender }
