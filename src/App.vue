<template>
  <div>
    <div class="page-header">
      <h1>router
        <small>Subtext for header</small>
      </h1>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <div class="caption">
            <router-link to="/about" class="btn btn-primary">About</router-link>
            <p></p>
            <router-link to="/Home" class="btn btn-primary">Home</router-link>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-3">
        <div class="panel">
          <div class="panel-body">
              <router-view></router-view>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>

  export default {}
</script>

<style>

</style>
