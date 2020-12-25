<!DOCTYPE html>
  <head>
    <?php wp_head();?>
    <title><?php wp_title();?> » <?php echo get_bloginfo('name');?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body <?php body_class();?> <?php get_body_style();?>>
    <div class="container">
      <div class="row">
        <div class="layout__nav-mobile__sticky">
          <div class="column">
            <div id="nav-mobile-toggler" class="layout__nav__visiblity-flex">
              <h1><?php echo get_bloginfo('name');?></h1>
              <i class="fas fa-bars"></i>
            </div>
          </div>
        </div>
        <div class="column column-25 layout__nav">
          <div class="layout__nav__sticky__filler"></div>
          <div class="row layout__nav__sticky">
            <div class="column">
              <?php include(get_template_directory() . '/inc/sidebar-header.php');?>              
              <?php include(get_template_directory() . '/inc/sidebar-categories.php');?>              
              <?php include(get_template_directory() . '/inc/sidebar-tags.php');?>              
              <?php include(get_template_directory() . '/inc/sidebar-archive.php');?>              
            </div>
          </div>
        </div>
        <div class="layout__nav-splitter">
        </div>
        <div class="column layout__content">


        
