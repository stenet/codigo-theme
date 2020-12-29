<!DOCTYPE html>
  <html <?php language_attributes();?>>
    <head>
      <?php wp_head();?>
      <title><?php wp_title();?> » <?php echo get_bloginfo('name');?></title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body <?php body_class();?> <?php get_body_style();?>>
      <div class="nav-main__background fixed w-0 h-0 z-10 bg-nav-bg"></div>
      <div class="lg:max-w-6xl lg:mx-auto lg:flex">
        <header class="lg:w-1/4 lg:py-8 lg:min-h-screen lg:static flex sticky top-0 flex-col flex-none bg-nav-bg text-nav-text z-20">
          <?php include(get_template_directory() . '/inc/sidebar-header-mobile.php');?>
          <div class="nav-main__filler"></div>
          <div class="nav-main lg:block lg:flex-grow-0 lg:py-0 lg:overflow-auto lg:text-base overflow-scroll flex-grow hidden px-4 space-y-4 py-4">
            <?php include(get_template_directory() . '/inc/sidebar-icon.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-header.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-social.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-nav.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-search.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-divider.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-categories.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-tags.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-archive.php');?>
          </div>
        </header>
        
        <div class="lg:border-r lg:border-border px-4 py-8 flex-auto bg-content-bg">       
