<div class="row">
  <div class="column">
    <div class="layout__nav__visiblity-flex" data-toggle-id="layout-nav-categories">
      <h3>Kategorien</h3>
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