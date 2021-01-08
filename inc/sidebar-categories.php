<div>
  <wc-accordion id="categories" accordion-text="Kategorien" accordion-default="open">
    <ul class="header-categories">
      <? wp_list_categories(array(
        'title_li' => '',
        'show_count' => true
      ));?>
    </ul>
  </wc-accordion>
</div>