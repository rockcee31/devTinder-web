# DevTinder

- create a Vite-react application
- Remove unecessary code and create a hello world app
- initiate a git repositarty
- as we ned navBar body and all the stuff qnd for designing our application we will be using library daizy UI
- we will be using tailwind,write tailwindcss configuration to intall tailwind  in your vite project and use it
- now to use tailwind inside tailwind.config.js file which came by installing tailwind update the file tailwind.config.js
content  :["./index.html","./src/**/*.{js,ts,jsx,tsx}"]  //tailwind will be tracked or work in these file the src part means any files inside my src folder with any name with extension any of this that can only be used in these file tailwind is configured to be used in this fille

//doubt why html here is this bbecause when we build a bundle app will converted to html so than we can use html in that also

in the index.css write code  that tailwind documentation says


--Install tailwinf css 
along qith tailwind,
we will also be using design compononent library  - daizy ui
compaitible with tailwins
when you use this daizy ui in their website if yoy go to component so it will give you lot of component  supoose if want to create accordian,navBar,etc you will find all the thing over here
-you dont have to write css and design things at myself we will be just be using component direct from this daizy ui library 

i have to i this daizy ui in our project 
cmfd not recommmende use it as plugin in tailwind what is using  like plugin

homework try theme of your document

let try use navbar component jsx

--intall daisy ui 
--Add NavBar component to App.jsx taking it from daizy ui

-create Navbar.jsx seperate component file

cjsmodule an es6module  export and inport work different in cjs we do module.export and require and in es6 module export and import

we will now setup routing in our appliication  in backend router we seprate same type of route request in different file and in frontend routing
everything in your application can not be hosted in your homepage at same time we need different different thing ui in different time suppose while you login you will see different ui and to create that we will show that ui onkly when user hits to /login route

sorry in backend it was not routing it is router

reactobject is converted to html by render 
now for writing navigating or routing code for different pages we need reat-router-dom

Now how do you do routing or how do you make navigation possible
for that use react-router-dom you have to create BrowserRouter and inside it you have to create basename and it is where your application root should point to "/" base all the routing inside it will work relative to this
now inside it i have to create <Routes> component and this is like wrapper  for all the  routes now lets create route
<Route path="Login" element={<div>login page</div>} >  //element will decide what  will be rendered in this path

good way to do routing

first we will create a body comp and inside this  willl always have a navbar now according to route if route=/ than i will show feed and if route is login than i will show login page and if connnection i will show connection whe decide this route before and than to code it become easier

children get rendered in Outlet component so you have to create it in body also create footer in body


nothing for today revise routing