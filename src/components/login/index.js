import React from 'react'
import styles from './login.module.css'

const Login = (props) => {
  var email = ''
  var password = ''

  
  const onChangeEmail = (event) => {
    email = event.target.value
  }
  
  const onChangePassword = (event) => {
    password = event.target.value
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.loginText}>Iniciar sesión</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={styles.input}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className={styles.input}
          onChange={onChangePassword}
        />
        <button  className={styles.button}>
          Login
          </button>
        
      </div>
    </div>
  )
}

export default Login
