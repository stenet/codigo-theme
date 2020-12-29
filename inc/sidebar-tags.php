<div>
  <wc-accordion id="tags" accordion-text="Schlagwörter">
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
  </wc-accordion>
</div>