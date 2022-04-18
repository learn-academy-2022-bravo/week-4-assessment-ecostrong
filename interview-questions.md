# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: Well I know props stands for properties and are called on in React.

  Researched answer:

  Props are arguments passed into React Components. They pass data from one component to another as parameters.  They are passed to components via HTML attributes.
  React Props are like function arguments in Javascript.

  Ie. W3 Schools

Example
Add a "brand" attribute to the Car element:

const myelement = <Car brand="Ford" />;
set the brand attribute in the component:

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
out put: I am Ford

2. What is a DOM event?

  Your answer: I am not sure, but I do know DOM is Document Object Model.

  Researched answer: A list of possible DOM events are as follows Click, touch, load, drag, change, input, error, resize. They are events that can be trigger on a document by user interaction or by the browser. They flow through a document on a lifecycle. In Javascript you can listen for events using
  lement.addEventListener(<event-name>, <callback>, <use-capture>);



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Well I think Object-oriented program is based on objects and functional is based on logic and functions. Ruby is an object oriented programming language.

  Researched answer: Object-oriented programming is a computer programming model that is organized around data and objects, instead of functions and logic in functional programming. OOP, has classes objects, methods, and attributes. The benefits are modularity, reusable, productivity, upgradable and scaleable, security, and flexibility.



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: I am not sure but I do know an integer is a number.

  Researched answer:

Integers and floats are different types of numerical data. An integer is called int) is a number without a decimal point.
Float are a floating-point number that has a decimal place. Floats are used for precision.

int a = 0;      
float b = 0.0

5. Ruby has an implicit return. What does that mean?

  Your answer: Not sure. I'll have to research that.

  Researched answer: Implicit return is any statement in Ruby that returns the value of the last evaluated expression. An example is the getter method.
  Basically, you call a method and expect some value in return.


## Looking Ahead: Terms for Next Week

1. Instance Variable: An instance variable in ruby is a name starting with @ symbol. Two separate objects even though they belong to the same class can have different values for their instance variable. Instance variables have the value nil before initialization.

instance variable
@myName = "HoneyBee1"
Output= My name is HoneyBee1


2. PostgreSQL: Is an advanced, enterprise open source object-relational database system. It has been around for 30 years and has a reputation for being a reliable and stable database management system.

3. Ruby on Rails: Is a server-side web application framework. It is written in Ruby. Ruby on Rails is used by AirbnB, GitHub, and Shopify. It is a model-view controller (MVC)framework, providing default structures for a database, a web service, and web pages. It uses JSON or XML, and HTML, CSS and JavaScript for user interfacing.

4. ORM: Object-relational mapping is a programming technique for converting data between types of systems. This is an Object-relational mapper, and it is a library that implements this technique.  

5. Active Record: Is the Object/Relational Mapping (ORM layer in Rails. Performs queries  on the database for you an is compatible with most database systems. Regardless of the database you are using the Active Record method format will always be the same.
  -table map to classes
  -rows map to objects and
  -columns map to object attributes
