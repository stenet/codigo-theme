<!DOCTYPE html>
  <html <?php language_attributes();?>>
    <head>
      <?php wp_head();?>
      <title><?php wp_title();?> » <?php echo get_bloginfo('name');?></title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body <?php body_class();?> <?php get_body_style();?>>
      <div class="fixed z-10 w-0 h-0 nav-main__background bg-nav-bg"></div>
      <div class="lg:max-w-6xl lg:mx-auto lg:flex">
        <header class="sticky top-0 z-20 flex flex-col flex-none lg:w-1/4 lg:py-8 lg:min-h-screen lg:static bg-nav-bg text-text">
          <?php include(get_template_directory() . '/inc/sidebar-header-mobile.php');?>
          <div class="nav-main__filler"></div>
          <div class="flex-grow hidden px-4 py-4 space-y-4 overflow-scroll nav-main lg:block lg:flex-grow-0 lg:py-0 lg:overflow-auto lg:text-base">
            <?php include(get_template_directory() . '/inc/sidebar-icon.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-social.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-nav.php');?>
            <?php include(get_template_directory() . '/inc/search.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-divider.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-categories.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-tags.php');?>
            <?php include(get_template_directory() . '/inc/sidebar-archive.php');?>
          </div>
        </header>
        
        <div class="flex-auto px-4 py-8 content-main lg:border-r lg:border-border bg-content-bg">       
