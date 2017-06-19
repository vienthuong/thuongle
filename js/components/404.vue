<template>
  <div class="contact-us full-screen">
    <nav class="navbar navbar-ct-default" role="navigation-demo">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link :to="{path:'/'}" class="navbar-brand">Chatbox</router-link>
        </div>
  
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navigation-example-2">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link :to="{path:'/'}">Home</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-->
    </nav>
    <div class="wrapper wrapper-full-page section content">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
              <h2 class="title text-danger">404 Not Found</h2>
              <h2 class="title">Oops! It seems that this page does not exist.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-demo">
      <div class="container">
        <nav class="pull-left">
        </nav>
        <div class="copyright pull-right">
          <i class="fa fa-heart heart"></i> by Thuong Le
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {}

</script>
<style scoped>
	h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p, .navbar, .brand, a, .td-name, td {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: 'Muli', "Helvetica", Arial, sans-serif;
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4 {
  font-weight: $font-weight-normal;
  margin: $margin-large-vertical 0 $margin-base-vertical;
}

h1, .h1 {
  font-size: $font-size-h1;
}

h2, .h2 {
  font-size: $font-size-h2;
}

h3, .h3 {
  font-size: $font-size-h3;
  line-height: 1.4;
  margin: 20px 0 10px;
}

h4, .h4 {
  font-size: $font-size-h4;
  font-weight: $font-weight-bold;
  line-height: 1.2em;
}

h5, .h5 {
  font-size: $font-size-h5;
  font-weight: $font-weight-normal;
  line-height: 1.4em;
  margin-bottom: 15px;
}

h6, .h6 {
  font-size: $font-size-h6;
  font-weight: $font-weight-bold;
  text-transform: uppercase;
}

p {
  font-size: $font-paragraph;
  line-height: $line-height-general;
}

h1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {
  color: $dark-gray;
  font-weight: $font-weight-light;
  line-height: $line-height-general;
}

h1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small {
  font-size: 60%;
}

.title-uppercase {
  text-transform: uppercase;
}

blockquote {
  font-style: italic;
}

blockquote small {
  font-style: normal;
}

.text-muted {
  color: $medium-gray;
}

.text-primary, .text-primary:hover {
  color: $primary-states-color;
}

.text-info, .text-info:hover {
  color: $info-states-color;
}

.text-success, .text-success:hover {
  color: $success-states-color;
}

.text-warning, .text-warning:hover {
  color: $warning-states-color;
}

.text-danger, .text-danger:hover {
  color: $danger-states-color;
}

.glyphicon {
  line-height: 1;
}

strong {
  color: $default-states-color;
}

.icon-primary {
  color: $primary-color;
}

.icon-info {
  color: $info-color;
}

.icon-success {
  color: $success-color;
}

.icon-warning {
  color: $warning-color;
}

.icon-danger {
  color: $danger-color;
}

.chart-legend {
  .text-primary, .text-primary:hover {
    color: $primary-color;
  }
  .text-info, .text-info:hover {
    color: $info-color;
  }
  .text-success, .text-success:hover {
    color: $success-color;
  }
  .text-warning, .text-warning:hover {
    color: $warning-color;
  }
  .text-danger, .text-danger:hover {
    color: $danger-color;
  }
}

</style>
