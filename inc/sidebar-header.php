<div class="relative hidden lg:block">
  <img src="<?php site_icon_url(300);?>" alt>
  <div class="absolute bottom-0 border-t border-b border-border w-full text-4xl font-bold py-4 bg-nav-bg bg-opacity-70"><?php echo get_bloginfo('name');?></div>
</div>

<div class="flex space-x-2">
  <?php get_social_media();?>
</div>

<nav>
  <?php wp_nav_menu(array(
    'theme_location' => 'header-menu',
    'menu_class' => 'header-menu'));?>
</nav>

<div>
  <? get_search_form();?>
</div>