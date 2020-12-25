<!DOCTYPE html>
  <head>
    <?php wp_head();?>
    <title><?php wp_title();?> » <?php echo get_bloginfo('name');?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body <?php body_class();?> <?php get_body_style();?>>
    <div class="container">
      <div class="row">
        <div class="row layout__nav-mobile__sticky">
          <div class="column">
            <div class="layout__nav__visiblity-flex">
              <h1><?php echo get_bloginfo('name');?></h1>
              <i id="nav-toggler" class="fas fa-bars"></i>
            </div>
          </div>
        </div>
        <div class="column column-25 layout__nav">
          <div class="row layout__nav__sticky">
            <div class="column">
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
              <div class="row">
                <div class="column">
                  <div class="layout__nav__visiblity-flex">
                    <h3>Kategorien</h3>
                    <div data-toggle-id="layout-nav-categories"></div>
                  </div>
                </div>
              </div>
              <div class="row" id="layout-nav-categories">
                <div class="column">
                  <ul class="header-categories">
                    <? wp_list_categories(array(
                      'title_li' => '',
                      'show_count' => true
                    ));?>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <div class="layout__nav__visiblity-flex">
                    <h3>Schlagwörter</h3>
                    <div data-toggle-id="layout-nav-tags"></div>
                  </div>
                </div>
              </div>
              <div class="row" id="layout-nav-tags">
                <div class="column">
                  <ul class="header-tags">
                    <?php 
                      $wptc = wp_tag_cloud(array(
                        'smallest' => 1,
                        'largest' => 1,
                        'unit' => 'em',
                        'orderby' => 'count',
                        'order' => 'DESC',
                        'format' => 'array',
                        'number' => 20,
                        'echo' => 0,
                        'show_count' => true
                      )); 
                      foreach( $wptc as $wpt ) echo "<li>" . $wpt . "</li>\n"; 
                    ?>
                  </ul>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <div class="layout__nav__visiblity-flex">
                    <h3>Archiv</h3>
                    <div data-toggle-id="layout-nav-archive"></div>
                  </div>
                </div>
              </div>
              <div class="row" id="layout-nav-archive">
                <div class="column">
                  <ul class="header-archive">
                    <? wp_get_archives(array(
                      'type' => 'monthly',
                      'show_post_count' => true
                    ));?>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="layout__nav-splitter">
        </div>
        <div class="column layout__content">


        
