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
  .nav-bar-container {
    top: 0;
    left: 5%;
    margin-top: 50px;
    position: absolute;
  }

  .nav-bar a {
    text-decoration: none;
    color: white;
    margin-left: 60px
  }

  .nav-bar input {
    border: none;
    margin: 0 20px 0 90px;
  }
</style>
