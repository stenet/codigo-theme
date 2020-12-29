<div>
  <wc-accordion id="archive" accordion-text="Archiv">
    <ul class="header-archive">
      <? wp_get_archives(array(
        'type' => 'monthly',
        'show_post_count' => true
      ));?>
    </ul>
  </wc-accordion>
</div>