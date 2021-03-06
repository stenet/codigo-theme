<?php

function load_javascripts() {
  wp_register_script("scripts", get_template_directory_uri() . "/js/build.js");
  wp_enqueue_script("scripts");
}

function load_stylesheets() {
  wp_register_style("fontawesome", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
  wp_enqueue_style("fontawesome");

  wp_register_style("style", get_template_directory_uri() . "/styles.css", array("fontawesome"));
  wp_enqueue_style("style");
}

function get_social_medias() {
  return array(
    "linkedin" => "fab fa-linkedin",
    "xing" => "fab fa-xing",
    "github" => "fab fa-github",
    "twitter" => "fab fa-twitter",
    "facebook" => "fab fa-facebook",
    "instagram" => "fab fa-instagram",
  );
}

function customize_register($wp_customize) {
  $social_sites = get_social_medias();
  
  $wp_customize->add_section("social_icons", array(
    "title" => "Social Media Icons",
    "priority" => 25
  ));
  
  foreach ($social_sites as $social_site => $value) {
    $label = ucfirst($social_site);

    $wp_customize->add_setting($social_site);    
    $wp_customize->add_control($social_site, array(
      "label" => $label,
      "section"  => "social_icons"
    ) );
  }
}

function get_social_media() {
  $result = "";

  $social_sites = get_social_medias();
  foreach ($social_sites as $social_site => $value) {
    $social_site_url = get_theme_mod($social_site);

    if (empty($social_site_url))  {
      continue;
    }

    $icon = $social_sites[$social_site];
    $result = $result . "<a rel='noopener noreferrer' href='{$social_site_url}' target='_blank' class='button-social'><i class='{$icon}'></i></a>";
  }

  echo $result;
}

function get_body_style() {
  echo "style='background-image: url(" . get_template_directory_uri() . "/assets/background.png)'";
}

add_action("wp_enqueue_scripts", "load_javascripts");
add_action("wp_enqueue_scripts", "load_stylesheets");
add_action("customize_register", "customize_register");

add_theme_support("menus");

register_nav_menus(array(
  "header-menu" => __("Header Menu", "theme"),
  "footer-menu" => __("Footer Menu", "theme")
));

add_image_size("small", 300);
add_image_size("large", 1100);