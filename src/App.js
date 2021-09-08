import './App.css';
let Intro =()=>{
  return (
    <>
      <h3 className="my-2" >Introduction to React:</h3>
      <p>React is a Javascript Library which is used for creating interactive UIs. React is created by Facebook on 2013 and was initially released for public used on 2016. React is an open source library. React is based on components means all website will be divided into small pieces called components. React is used for creating single page web application.</p>
    </>
  )
}

let Real =()=>{
  return(
  <>
  <h3 className="my-5">VIRTUAL DOM VS REAL DOM:</h3>
  <h4>Real Dom:</h4>
  <p>The Real DOM is a part of a HTML’s page structure. It takes HTML elements and wraps them in an object with a tree-structure maintaining the parent/child relationships of those nested HTML elements. The Real DOM needs refresh after every change.</p>
    <h4 className="my-2">VIRTUAL DOM:</h4> 
    <p>The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM. It doesn’t need refresh after changes.</p>
  </>
  )
}

let Ang =()=>{
  return(
    <>
     <h3 className="my-5">React VS Angular</h3>
     <h4>React:</h4>
     <p>•	React is a javascript library that allows you to build UI components. <br />
•	React is based on Virtual DOM. <br />
•	React allows adding javascript library to the source code.
</p> <br />
<h4 className="my-2">Angular:</h4>
<p>•	AngularJS is a structural framework for developing dynamic web apps. <br />
•	Angular JS is based on MVC (Model View Controller). <br />
•	AngularJS doesn’t provide adding javascript library to the source code.
</p>


    </>
  )
}

let Spa = ()=>{
  return(
    <>
    <h3 className="my-5">SPA VS MPA:</h3>
    <h4>Single Page Application:</h4>
    <p>A web app which is created in a single page is call Single Page Application. A SPA is usually reload only one time after visiting. SPA are very smooth to used and have very interactive UIs.</p>
     <h4 className="my-2">Multiple Page Application:</h4> 
     <p>Multiple-page applications work in a “traditional” way. Every change  display the data or submit data back to server requests rendering a new page from the server in the browser. These applications are large, bigger than SPAs because they need to be reload after every request.</p>
    </>
    
  )

}

let Binding = ()=>{
  return(
    <>
    <h3 className="my-5">ONE WAY DATA BINDING VS TWO WAY DATA BINDING:</h3>
    <h4>One way Data Binding:</h4>
    <p>One-way data binding will bind the data from the component to the view (DOM) or from view to the component. One-way data binding is unidirectional. You can only bind the data from component to the view or from view to the component</p>
 
 <h4 className="my-2">Two Way Data Binding:</h4>
 <p>Two-way data binding means data flows in both directions, it means any change happens in the view updates the data and any change happens in the data updates the view.</p>
 
 </>
  )
}

let Frame = ()=>{
return(
  <>
  <h3 className="my-5">Framework VS Library:</h3>
  <h4>Framework:</h4>
  <p>A framework is a supporting structure that gives shape to your code.In the Framework, you have to fill the structure accordingly with your code.There is a specific structure for a particular framework that you have to follow, and it's generally more restrictive than Library.</p>
  <h4 className="my-2">Library:</h4>
  <p>A Library is a set of code that was previously written by a developer that you can call when you are building your project.In Library, you import or call specific methods that you need for your project.In simple words, a bunch of code packed together that can be used repeatedly is known as Library.Reusability is one of the main reasons to use libraries.</p>
  </>
)
}

function App() {
 
  return (
    
    <>
<div className="container my-4"> 
<h2 className="d-flex justify-content-center mb-5">ARTICLE ON REACT:</h2>
  <div className="my-3">
 <Intro/>
 <Real/>
 <Ang/>
 <Spa/>
 <Binding/>
 <Frame/>
  </div>

</div>


    </>
 
  );
}

export default App;
