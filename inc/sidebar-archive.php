<div class="row">
  <div class="column">
    <div class="layout__nav__visiblity-flex" data-toggle-id="layout-nav-archive">
      <h3>Archiv</h3>
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