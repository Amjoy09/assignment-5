

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

Answer:
All of these are methods for selecting elements in JavaScript, but they work differently:

`getElementById`→ Selects a single element using a specific `id`. It always returns one element (or `null` if not found).

`getElementsByClassName`→ Selects one or more elements using a specific class name. It returns an HTMLCollection, which looks like an array but does not support all array methods (e.g., `forEach()`).

`querySelector` → Selects the first matching element in the document using any CSS selector (`id`, `class`, `tag`, etc.). If no element is found, it returns `null`.

`querySelectorAll  → Selects all matching elements in the document using a CSS selector. It returns a static NodeList, which supports most array methods including `forEach()`. This makes it more convenient than an HTMLCollection.



### 2. How do you create and insert a new element into the DOM?

Answer:

Creating and inserting an element into the DOM involves a few steps, which are listed below

i. Create the element using `document.createElement()`:

   
   const newParagraph = document.createElement('p');
  

ii. Add content to the element using properties like `textContent`, `innerText`, or `innerHTML`:

  
   newParagraph.textContent = 'This is a new paragraph.';
   

iii. Select the parent element where you want to insert the new element:

   
   const parentDiv = document.getElementById('container');
  

iv. Insert the element into the DOM using `appendChild()` (adds as the last child):

  
   parentDiv.appendChild(newParagraph);
   

### 3. What is Event Bubbling and how does it work?

Answer:
Event Bubbling is a DOM event propagation mechanism
When you trigger an event (like `click`) on a child element, the event does not stop there. Instead, it "bubbles up" through the hierarchy:
`child → parent → grandparent → document → window`.

Example:

html
<div id="parent">
  <button id="child">Click Me</button>
</div>


If you click the button:

1. The event first occurs on the `child` (`button`).
2. Then it bubbles up to the `parent` (`div`).
3. Then further up to `document` and finally `window`.


### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation is a technique where instead of adding event listeners to multiple child elements, we add a  single event listener to the parent element.
Because of event bubbling, the event triggered on a child bubbles up to the parent, where we can handle it and determine which child triggered the event.



Why is it useful?
     
Performance:

      If there are many child elements, adding individual listeners to each one is inefficient. With delegation, a single parent listener can handle all of them.

      Dynamic Elements:

      If new child elements are added to the DOM later, we don’t need to add new listeners for them. The parent listener will still work.


      Cleaner Code: 

      Makes the code shorter, easier to read, and easier to maintain.


### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

Answer:

i. `event.preventDefault()`

     Purpose:

     Stops the element’s default behavior from happening.
     Example: Preventing a form from submitting, or a link from navigating to another page.
    The event still occurs, but the browser’s default action does not.

ii. `event.stopPropagation()`

    Purpose: Stops the event from bubbling (or capturing) any further.
    Example: A click on a child element will not bubble up to its parent.

In short:

   `preventDefault()` → Stop the browser’s default action.
    stopPropagation()` → Stop the event from moving up (or down) the DOM.

Both can be used together if needed.
