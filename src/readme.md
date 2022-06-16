**NOT FOUND**

***asterisco***

Si el path fuera un asterisco "*" para el resto de rutas quiero que el elemento pinte un componente especial.

***IMPORTANTE***
**PROBLEMAS con el BrowserRouter**
antiguamente: 
`import {Router, Routes, Route} from "react-router-dom";`

en la versión 6 para que no se quede la pantalla en blanco utilizando a la vez NavLink

`import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

***Ejemplo en App.jsx***

`import { BrouserRouter as Router, Routes, Route} from "react-router-dom";`
`import Navbar from "./components/Navbar";`
`import Home from "./components/pages/Home";`
`import About from "./components/pages/About";`
`import Contact from "./components/pages/Contect";`

function App(){
return(
<>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
</>
);
}

***También para que aparezca los textos de otros componentes Use _Elemento_***

`<Route path="/" element={<Home />} />`

**en lugar de componente**

`<Route path="/" component={<Home />} />`

**Link**

Evita refrescar la página cuando estamos en una aplicación React.

`<Link to={`/users/${userId}`}> Usuarios </Link>`


**PARAMS**
Parametros 
¿ Cómo podemos crear distintas páginas para los distintos usuarios, con distintos ID ?
Nosotros creamos una sola vista y dependiendo del dato que esten pasando en la URL nosotros pintamos los determinados datos de ese usuario. Al final la vista es la misma pero a partir del dato que me está pasando es como se cambia los datos.

***NAVIGATE***
Si queremos replazar la ruta seria:

`<Route path="/usuarios" element={<Navigate to ="/user" />} />`

***Navegar con un Hook y no con un componente**

***Podemos crear rutas dentro de rutas***

` <Routes>`
    `<Route path="/" element={<HomePage />} />`
    `<Route path="/about" element={<AboutPage />} />`
    `<Route path="usuarios" element={<Navigate to="/user" />} />`
    `<Route path="/user/:id" element={<UserPage />} />`

    `<Route path="/dasboard/*" element={<Dasboard />} >`
    `<Route path="welcome" element={<Welcome />} >`
    `<Route path="goodbye" element={<p>Goodbye!!!</p>} />`
`</Route>`

`<Route path="*" element={<NotFoundPage />} />`

`</Routes>`