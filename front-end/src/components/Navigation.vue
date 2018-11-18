<template>
  <div class="nav-bar-container">
    <nav class="nav-bar">
      <router-link to="/shop">Shop</router-link>
      <router-link to="/journal">Journal</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/bespoke">Bespoke</router-link>
        <input type="text">
      <router-link to="/eu">EU</router-link>
      <router-link to="/MyAccount">My Account</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
  </div>
</template>
<style>
/* big landscape tablets, laptops, and desktops */
@media (min-width:1025px) {
.nav-bar-container {
  text-align: center;
  top: 0;
  left: 5%;
  margin-top: 50px;
  position: absolute;
}

.nav-bar a {
  text-decoration: none;
  color: white;
  padding: 0 15px 0 15px;
}

.nav-bar input {
  border: none;
  padding: 10px;
  margin: 0 280px 0 190px;
  width: 220px;
}

}
  .nav-bar-container {
    text-align: center;
    top: 0;
    left: 5%;
    margin-top: 50px;
    position: absolute;
  }

  .nav-bar a {
    text-decoration: none;
    color: white;
    padding: 0 15px 0 15px;
  }

  .nav-bar input {
    border: none;
    padding: 10px;
    margin: 0 280px 0 190px;
    width: 220px;
  }
/* smartphones, Android phones, landscape iPhone */
  @media (min-width:370px)  {
  .nav-bar-container {
    width: 575px;
    text-align: center;
    top: 0;
    left: 5%;
    position: absolute;
  }

  .nav-bar a {
    text-decoration: none;
    color: white;
    padding: 0 5px 0 5px;
  }

  .nav-bar input {
    border: none;
    padding: 10px;
    border: none;
    padding: 0px;
    margin: 0 0px 0 0px;
    width: 100px;
  }
}
</style>
