<div class="row">
  <div class="column">
    <h1><?php echo get_bloginfo('name');?></h1>
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