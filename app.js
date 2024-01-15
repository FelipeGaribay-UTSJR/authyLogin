<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css&quot;
    />
    <style>
      body {
        background-color: #f8f9fa;
      }

      .login-container {
        max-width: 400px;
        margin: auto;
        margin-top: 100px;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    </style>
    <title>Página de Autenticación</title>
  </head>
  <body>
    <div class="container">
      <div class="login-container">
        <h2 class="text-center">Iniciar Sesión</h2>
        <form id="formLogin" name="formLogin">
          <div class="form-group">
            <label for="correo">Correo electrónico:</label>
            <input
              type="email"
              class="form-control"
              id="correo"
              name="correo"
              placeholder="Ingrese su correo"
              required
            />
          </div>
          <div class="form-group">
            <label for="contrasena">Contraseña:</label>
            <input
              type="password"
              class="form-control"
              id="contrasena"
              name="contrasena"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <button
            type="button"
            class="btn btn-primary btn-block"
            onclick="loginUser()"
          >
            Iniciar Sesión
          </button>
          <button type="button" class="btn btn-secondary btn-block">
            Cerrar
          </button>
          <a href="registro.html" class="btn btn-link btn-block">Registrarse</a>
        </form>
      </div>
    </div>

    // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoYXrbEdBLf9evXOUKb2JoPHbUncvZUAE",
  authDomain: "login-e0c81.firebaseapp.com",
  projectId: "login-e0c81",
  storageBucket: "login-e0c81.appspot.com",
  messagingSenderId: "497358508078",
  appId: "1:497358508078:web:7fce464c8c93e153688fbf",
  measurementId: "G-ZETGDWCPXE"
};

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script&gt;
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script&gt;
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.min.js"></script&gt;

    <!-- Firebase -->
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"></script&gt;

    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-analytics.js"></script&gt;
    <script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-auth.js"></script&gt;
    <script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-database.js"></script&gt;

    <script>
      var firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: "",
      };

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    </script>

    <script src="/js/app.js"></script>
  </body>
</html>

