<!DOCTYPE html>
  <html <?php language_attributes();?>>
    <head>
      <?php wp_head();?>
      <title><?php wp_title();?> » <?php echo get_bloginfo('name');?></title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body <?php body_class();?> <?php get_body_style();?>>
      <div class="lg:max-w-6xl lg:mx-auto lg:flex">
        <header class="sticky top-0 z-20 flex flex-col flex-none lg:w-80 lg:py-10 lg:min-h-screen lg:static lg:border-l lg:border-border bg-bg text-text">
          <div class="fixed w-0 h-0 nav-main__background bg-bg"></div>
          <?php include(get_template_directory() . '/inc/sidebar-header-mobile.php');?>
          <div class="nav-main__filler"></div>
          <div class="flex-grow hidden px-4 py-4 -mt-12 space-y-8 overflow-scroll text-lg lg:mt-0 lg:space-y-8 lg:text-base lg:px-6 nav-main lg:block lg:flex-grow-0 lg:py-0 lg:overflow-auto">
            <?php include(get_template_directory() . '/inc/sidebar-icon.php');?>
            <div class="hidden h-px bg-border lg:block"></div>
            <?php include(get_template_directory() . '/inc/sidebar-social.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-nav.php');?>
            <?php include(get_template_directory() . '/inc/search.php');?>
            <div class="h-px bg-border"></div>
            <?php include(get_template_directory() . '/inc/sidebar-categories.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-tags.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-archive.php');?>
          </div>
        </header>
        
        <div class="flex-auto px-4 py-8 lg:px-6 lg:py-10 content-main lg:border-r lg:border-border bg-bg">       
