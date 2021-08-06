import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  
  const topic = document.createElement('div');
  topic.classList.add('topics');
  topics.forEach(item => {
    const tab = document.createElement('div');
    tab.textContent = item;
    topic.appendChild(tab);
  });
  return topic;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  axios.get('http://localhost:5000/api/topics')
    .then(res => {
      // console.log(res);
      const entryPoint = document.querySelector(selector);
      const tabs = res.data.topics;
      entryPoint.appendChild(Tabs(tabs));

      
      let javascriptLink = document.querySelector('.tab:nth-child(1)');
      let bootstrapLink = document.querySelector('.tab:nth-child(2)');
      let technologyLink = document.querySelector('.tab:nth-child(3)');
      let jqueryLink = document.querySelector('.tab:nth-child(4)');
      let nodejsLink = document.querySelector('.tab:nth-child(5)');

      javascriptLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.javascript.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })
      bootstrapLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.bootstrap.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })
      technologyLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.technology.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })
      jqueryLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.jquery.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })
      nodejsLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.node.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })

    })
    .catch(err => {
      console.error(err);
    })
};

export { Tabs, tabsAppender }
