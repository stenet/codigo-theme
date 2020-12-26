<!DOCTYPE html>
  <html <?php language_attributes();?>>
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
              <?php include(get_template_directory() . '/inc/sidebar-header-mobile.php');?>    
            </div>
          </div>
          <header class="column column-25 layout__nav">
            <div class="layout__nav__sticky__filler"></div>
            <div class="layout__nav__sticky">
              <?php include(get_template_directory() . '/inc/sidebar-header.php');?>              
              <?php include(get_template_directory() . '/inc/sidebar-categories.php');?>              
              <?php include(get_template_directory() . '/inc/sidebar-tags.php');?>              
              <?php include(get_template_directory() . '/inc/sidebar-archive.php');?>              
            </div>
          </header>
          <div class="column layout__content">


        
