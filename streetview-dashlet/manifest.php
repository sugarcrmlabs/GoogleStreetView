<?php
/*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */

$manifest = array (
  'built_in_version' => '7.7.0.0',
  'acceptable_sugar_versions' =>
  array (
    0 => '',
  ),
  'acceptable_sugar_flavors' =>
  array (
    0 => 'ENT',
    1 => 'ULT',
  ),
  'readme' => '',
  'key' => 'raw',
  'author' => '',
  'description' => '',
  'icon' => '',
  'is_uninstallable' => true,
  'name' => 'Streetview Dashlet',
  'published_date' => '2016-12-29 17:43:07',
  'type' => 'module',
  'version' => time(),
  'remove_tables' => 'prompt',
);


$installdefs = array (
  'copy' =>
	array (
	     0 =>
			array (
			  'from' => '<basepath>/custom/Extension/application/Ext/Language/en_us.streetview_dashlet.php',
			  'to' => 'custom/Extension/application/Ext/Language/en_us.streetview_dashlet.php',
			),
		  1 =>
			array (
			  'from' => '<basepath>/custom/clients/base/fields/custom-streetview-setup-field/custom-streetview-setup-field.js',
			  'to' => 'custom/clients/base/fields/custom-streetview-setup-field/custom-streetview-setup-field.js',
			),
		  2 =>
			array (
			  'from' => '<basepath>/custom/clients/base/fields/custom-streetview-setup-field/edit.hbs',
			  'to' => 'custom/clients/base/fields/custom-streetview-setup-field/edit.hbs',
			),
		  3 =>
			array (
			  'from' => '<basepath>/custom/clients/base/views/streetview-dashlet/streetview-dashlet.php',
			  'to' => 'custom/clients/base/views/streetview-dashlet/streetview-dashlet.php',
			),
		  4 =>
			array (
			  'from' => '<basepath>/custom/clients/base/views/streetview-dashlet/streetview-dashlet.js',
			  'to' => 'custom/clients/base/views/streetview-dashlet/streetview-dashlet.js',
			),
		  5 =>
			array (
			  'from' => '<basepath>/custom/clients/base/views/streetview-dashlet/streetview-dashlet.hbs',
			  'to' => 'custom/clients/base/views/streetview-dashlet/streetview-dashlet.hbs',
			),
  ),
);

