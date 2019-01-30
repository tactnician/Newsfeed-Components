// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    this.article = this.domElement.querySelector('.article');
    
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // console.log(this.domElement);
    
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = 'expand';

    // Expand button event Listener
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // console.log(this.article);
    this.article.classList.toggle('article-open')

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article').forEach( art => new Article(art));
