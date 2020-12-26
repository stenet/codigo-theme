<div class="row">
  <div class="column">
    <div class="layout__nav__icon__container">
      <img src="<?php site_icon_url(300);?>" class="layout__nav__icon" alt>
      <h1><?php echo get_bloginfo('name');?></h1>
    </div>
  </div>
</div>
<div class="row">
  <div class="column">
    <div><?php get_social_media();?></div>
  </div>
</div>
<div class="row">
  <div class="column">
    <nav>
      <?php wp_nav_menu(array(
        'theme_location' => 'header-menu',
        'menu_class' => 'header-menu'));?>
    </nav>
  </div>
</div>
<div class="row">
  <div class="column">
    <? get_search_form();?>
  </div>
</div>