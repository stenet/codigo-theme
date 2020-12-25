<div class="row">
  <div class="column">
    <div class="layout__nav__visiblity-flex" data-toggle-id="layout-nav-tags">
      <h3>Schlagwörter</h3>
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
  </div>
</div>