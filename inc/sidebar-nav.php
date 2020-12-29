<nav>
  <wc-accordion id="nav" accordion-text="Navigation" accordion-default="open">
    <?php wp_nav_menu(array(
      'theme_location' => 'header-menu',
      'menu_class' => 'header-menu'));?>
  </wc-accordion>
</nav>