<?php
// Our own endpoint: the plant post type, built like the "cake" example from class.
function plantshop_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');

    register_nav_menus(array(
        'primary' => 'Hovedmenu',
    ));
}

add_action('after_setup_theme', 'plantshop_setup');

/* function midnight_coven_assets() {
    wp_enqueue_style(
        'midnight-coven-style',
        get_stylesheet_uri(),
        array(),
        filemtime(get_stylesheet_directory() . '/style.css')
    );
}

add_action('wp_enqueue_scripts', 'midnight_coven_assets'); */

function plantshop_register_plant_post_type()
{
    register_post_type('plant', [
        'labels' => [
            'name' => 'Plants',
            'singular_name' => 'Plant',
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true, // important for Gutenberg + REST API
        'menu_icon' => 'dashicons-palmtree',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'rewrite' => ['slug' => 'plants'],
    ]);
    // Shop fields that are sent with each plant in the REST API.
    $fields = [
        'shop_id' => 'integer',
        'price' => 'integer',
        'origin' => 'string',
        'light' => 'string',
        'water' => 'string',
        'note' => 'string',
        'family' => 'string',
        'genus' => 'string',
    ];
    foreach ($fields as $key => $type) {
        register_post_meta('plant', $key, [
            'type' => $type,
            'single' => true,
            'show_in_rest' => true,
        ]);
    }
}
add_action('init', 'plantshop_register_plant_post_type');