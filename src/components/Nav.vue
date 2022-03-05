<template>
  <div>
    <div class="border border-secondary">
      <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/equipos">Equipos</b-nav-item>
            <b-nav-item to="/noencontrado">Planes</b-nav-item>
            <b-nav-item to="/noencontrado">Prepago</b-nav-item>
            <b-nav-item to="/noencontrado">Oficina Virtual</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
  }
</script>