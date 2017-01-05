<?php
$viewdefs['base']['view']['streetview-dashlet'] = array(
    'dashlets' => array(
        array(
            'label' => 'LBL_STREETVIEW_DASHLET',
            'description' => 'LBL_STREETVIEW_DASHLET_DESC',
            'config' => array(
                'setup_field' => ''
            ),
            'preview' => array(
            ),
            'filter' => array(
                'view' => 'record'
            )
        ),
    ),
    'panels' => array(
        array(
            'name' => 'streetview_settings',
            'columns' => 2,
            'labelsOnTop' => true,
            'placeholders' => true,
            'fields' => array(
                array(
                    'name' => 'streetview_setting_field',
                    'type' => 'custom-streetview-setup-field',
                    'span' => 12,
                ),
            ),
        ),
    ),
);